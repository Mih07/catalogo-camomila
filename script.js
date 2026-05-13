const BASE_ID = 'appLjEcnveJBepp0D';

let produtos = [];
let revendedoras = [];
let carrinho = [];
let revendedoraAtiva = null;

async function inicializar() {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref') ? params.get('ref').trim().toUpperCase() : null;
    console.log("Código de referência detectado:", ref);
    try {
        const [resProd, resRev] = await Promise.all([
            fetch('/api/airtable?tabela=PRODUTOS').then(r => r.json()),
            fetch('/api/airtable?tabela=REVENDEDORAS').then(r => r.json())
        ]);
        console.log("Resposta produtos:", resProd);
        console.log("Resposta revendedoras:", resRev);

        if (resProd.error || resRev.error) {
            console.error("Erro na API:", resProd.error || resRev.error);
            return;
        }

        produtos = resProd.records.map(rec => ({
            id: rec.id,
            nome: rec.fields['Name'] || 'Produto',
            preco: parseFloat(String(rec.fields['Notes'] || "0").replace(',', '.')) || 0,
            precoOriginal: parseFloat(String(rec.fields['PreçoOriginal'] || "0").replace(',', '.')) || 0,
            img: rec.fields['Attachments']?.[0]?.url || '',
            estoque: parseInt(rec.fields['Estoque']) || 0,
            categoria: rec.fields['Categoria'] || 'Geral',
            descricao: rec.fields['Descrição'] || '',
            grama: rec.fields['Grama'] || '',
            statusCampanha: rec.fields['Lançamento'] || ''
        }));

        revendedoras = resRev.records.map(rec => ({
            codigo: String(rec.fields['CÓDIGO'] || '').trim().toUpperCase(), 
            nome: rec.fields['NOME'] || '',
            whatsapp: String(rec.fields['PHONE NUMBER'] || '').replace(/\D/g, '')
        }));
        
        renderizarProdutos(produtos);

        if (ref) {
            const rev = revendedoras.find(r => r.codigo === ref);
            if (rev) liberarAcesso(rev.nome);
        }
    } catch (e) { 
        console.error("Erro crítico:", e);
    } finally {
        const loader = document.getElementById('mensagem-carregando');
        if (loader) loader.style.display = 'none';
    }
}

function renderizarProdutos(lista) {
    const v = document.getElementById('vitrine');
    const vDestaques = document.getElementById('vitrine-destaque');
    const bannerPrincipal = document.getElementById('banner-principal');

    if (!v) return;

    // 1. Banner
    const banner = lista.find(p => p.nome.toUpperCase() === 'BANNER');
    if (banner && banner.img && bannerPrincipal) {
        bannerPrincipal.innerHTML = `
            <div class="p-0 m-0">
                <img src="${banner.img}" class="img-fluid w-100" style="height: 380px; object-fit: cover; display: block;" alt="Banner">
            </div>
        `;
    }

    const listaFiltrada = lista.filter(p => p.nome.toUpperCase() !== 'BANNER');
    
    // 2. Destaques
    const destaques = listaFiltrada.filter(p => p.statusCampanha !== '');
    if (vDestaques) {
        vDestaques.innerHTML = destaques.map(p => `
            <div class="col-6 col-md-3 mb-3">
                <div class="card card-produto card-lancamento shadow-sm h-100 border-0 rounded-4 overflow-hidden">
                    <span class="badge-especial bg-success"><i class="bi bi-stars"></i> ${p.statusCampanha}</span>
                    <img src="${p.img}" class="card-img-top" style="aspect-ratio:1/1; object-fit:cover; cursor:pointer;" onclick="abrirDetalhes('${p.id}')"> 
                    <div class="card-body p-2 text-center">
                        <h6 class="fw-bold mb-0" style="font-size:0.85rem;">${p.nome}</h6>
                        ${p.precoOriginal > 0 ? `
                            <div class="mb-1"><small class="text-muted text-decoration-line-through me-1" style="font-size:0.75rem;">R$ ${p.precoOriginal.toLocaleString('pt-br',{minimumFractionDigits:2})}</small>
                            <span class="text-danger fw-bold">R$ ${p.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}</span></div>
                        ` : `<p class="text-success small fw-bold mb-2">R$ ${p.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}</p>`}
                        <button class="btn btn-success btn-sm w-100 rounded-pill fw-bold" onclick="adicionarAoCarrinho('${p.id}')">Adicionar</button>
                    </div>
                </div>
            </div>`).join('');
    }

    // 3. Vitrine Normal
    const normais = listaFiltrada.filter(p => p.statusCampanha === '');
    v.innerHTML = normais.map(p => `
        <div class="col-6 col-md-4 col-lg-3 mb-3">
            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center">
                <img src="${p.img}" class="card-img-top" style="aspect-ratio:1/1; object-fit:cover; cursor:pointer;" onclick="abrirDetalhes('${p.id}')"> 
                <div class="card-body p-2">
                    <h6 class="fw-bold mb-0" style="font-size:0.85rem;">${p.nome}</h6>
                    <small class="text-muted d-block mb-1">${p.grama}</small>
                    ${p.precoOriginal > 0 ? `
                        <div class="mb-1"><small class="text-muted text-decoration-line-through me-1" style="font-size:0.75rem;">R$ ${p.precoOriginal.toLocaleString('pt-br',{minimumFractionDigits:2})}</small>
                        <span class="text-danger fw-bold">R$ ${p.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}</span></div>
                    ` : `<p class="text-success small fw-bold mb-2">R$ ${p.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}</p>`}
                    <button class="btn btn-success btn-sm w-100 rounded-pill fw-bold" onclick="adicionarAoCarrinho('${p.id}')">Adicionar</button>
                </div>
            </div>
        </div>`).join('');
}

// ... (Manter o restante das funções: liberarAcesso, abrirDetalhes, etc., iguais ao que você já tinha)

function abrirModalCarrinho() {
    bootstrap.Modal.getOrCreateInstance(document.getElementById('modalCarrinho')).show();
}

function finalizarNoWhats() {
    if (!revendedoraAtiva) return alert("Erro: Revendedora não identificada.");
    const nomeCliente = document.getElementById('cliente-nome').value.trim();
    const pagamento = document.getElementById('pagamento-metodo').value;
    if (!nomeCliente || carrinho.length === 0) return alert("Informe seu nome e adicione produtos.");

    let msg = `*Pedido Camomila Saboaria*\n--------------------------\n`;
    msg += `*Revendedora:* ${revendedoraAtiva.nome}\n*Cliente:* ${nomeCliente}\n*Pagamento:* ${pagamento}\n\n*Itens:*\n`;
    carrinho.forEach(i => {
        msg += `• ${i.quantidade}x ${i.nome} - R$ ${(i.preco * i.quantidade).toFixed(2).replace('.', ',')}\n`;
    });
    const total = carrinho.reduce((acc, i) => acc + (i.preco * i.quantidade), 0);
    msg += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
    
    let fone = revendedoraAtiva.whatsapp;
    if (!fone.startsWith('55')) fone = '55' + fone;
    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(msg)}`, '_blank');
    
    carrinho = [];
    atualizarCarrinhoUI();
    bootstrap.Modal.getOrCreateInstance(document.getElementById('modalCarrinho')).hide();
    location.reload();
}

inicializar();