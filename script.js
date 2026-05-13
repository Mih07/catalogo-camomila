const BASE_ID = 'appLjEcnveJBepp0D';

let produtos = [];
let revendedoras = [];
let carrinho = [];
let revendedoraAtiva = null;

async function inicializar() {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref') ? params.get('ref').trim().toUpperCase() : null;
    
    try {
        const [resProd, resRev] = await Promise.all([
            fetch('/api/airtable?tabela=PRODUTOS').then(r => r.json()),
            fetch('/api/airtable?tabela=REVENDEDORAS').then(r => r.json())
        ]);

        console.log("PRODUTOS:", resProd);
        console.log("REVENDEDORAS:", resRev);

        if (resProd.error || resRev.error) {
            console.error("Erro na API:", resProd.error || resRev.error);
            return;
        }

        produtos = resProd.records.map(rec => ({
            id: rec.id,
            nome: rec.fields['Name'] || 'Produto',
            preco: parseFloat(String(rec.fields['Notes'] || "0").replace(',', '.')) || 0,
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
            if (rev) {
                liberarAcesso(rev.nome);
            }
        }

    } catch (e) { 
        console.error("Erro crítico:", e);
    } finally {
        const loader = document.getElementById('mensagem-carregando');
        if (loader) loader.style.display = 'none';
    }
}

function liberarAcesso(nomeRevendedora) {
    document.getElementById('tela-bloqueio').style.display = 'none';
    document.getElementById('conteudo-principal').style.display = 'block';
    const bannerMsg = document.getElementById('nome-revendedora-banner');
    if (bannerMsg) {
        bannerMsg.innerHTML = `<div class="p-2 text-center fw-bold" style="background:#f1f8f1; color:#2d5a27; font-size:0.9rem; border-bottom:1px solid #e1eee1;">
            <i class="bi bi-person-check"></i> Você está sendo atendida(o) por: ${nomeRevendedora}
        </div>`;
    }
    const modalCampanha = new bootstrap.Modal(document.getElementById('modalCampanha'));
    modalCampanha.show();
}

function verificarAcesso() {
    const cod = document.getElementById('input-codigo').value.trim().toUpperCase();
    const rev = revendedoras.find(r => r.codigo === cod);
    if (rev) {
        revendedoraAtiva = rev;
        liberarAcesso(rev.nome);
    } else {
        document.getElementById('erro-login').style.display = 'block';
    }
}

function renderizarProdutos(lista) {
    const v = document.getElementById('vitrine');
    const vDestaques = document.getElementById('vitrine-destaque');
    const bannerPrincipal = document.getElementById('banner-principal');
    if (!v) return;

    // 1. Busca e exibe o banner
    const banner = lista.find(p => p.nome.toUpperCase() === 'BANNER');
    if (banner && banner.img && bannerPrincipal) {
        bannerPrincipal.innerHTML = `
            <div class="px-1 py-2" style="background:#f1f8f1; border-radius:0 0 8px 8px; border-bottom:1px solid #e1eee1;">
                <img src="${banner.img}" class="img-fluid" style="width: 100%; height: 350px; object-fit: cover;" alt="Banner Camomila">
            </div>
        `;
    }

    // 2. Filtra a lista removendo o item BANNER
    const listaFiltrada = lista.filter(p => p.nome.toUpperCase() !== 'BANNER');
    
    // 3. Organiza destaques
    const destaques = listaFiltrada.filter(p => p.statusCampanha !== '').sort((a, b) => {
        const peso = (t) => {
            const low = t.toLowerCase();
            if (low.includes('mães')) return 1;
            if (low.includes('lança')) return 2;
            if (low.includes('ciclo')) return 3;
            return 4;
        };
        return peso(a.statusCampanha) - peso(b.statusCampanha);
    });

    const normais = listaFiltrada.filter(p => p.statusCampanha === '');

    if (vDestaques) {
        vDestaques.innerHTML = destaques.map(p => {
            const txt = p.statusCampanha.toLowerCase();
            const cor = txt.includes('mães') ? 'label-maes' : (txt.includes('ciclo') ? 'bg-warning text-dark' : 'bg-success');
            const ico = txt.includes('mães') ? 'bi-heart-fill' : (txt.includes('ciclo') ? 'bi-exclamation-triangle-fill' : 'bi-stars');
            return `
                <div class="col-6 col-md-3 mb-3">
                    <div class="card card-produto card-lancamento shadow-sm h-100 border-0 rounded-4 overflow-hidden">
                        <span class="badge-especial ${cor}"><i class="bi ${ico}"></i> ${p.statusCampanha}</span>
                        <img src="${p.img}" class="card-img-top" style="aspect-ratio:1/1; object-fit:cover; cursor:pointer;" onclick="abrirDetalhes('${p.id}')"> 
                        <div class="card-body p-2 text-center">
                            <h6 class="fw-bold mb-0" style="font-size:0.85rem;">${p.nome}</h6>
                            <p class="text-success small fw-bold mb-2">R$ ${p.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}</p>
                            <button class="btn btn-success btn-sm w-100 rounded-pill fw-bold" onclick="adicionarAoCarrinho('${p.id}')">Adicionar</button>
                        </div>
                    </div>
                </div>`;
        }).join('');
        vDestaques.style.display = destaques.length > 0 ? 'flex' : 'none';
    }

    v.innerHTML = normais.map(p => `
        <div class="col-6 col-md-4 col-lg-3 mb-3">
            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center">
                <img src="${p.img}" class="card-img-top" style="aspect-ratio:1/1; object-fit:cover; cursor:pointer;" onclick="abrirDetalhes('${p.id}')"> 
                <div class="card-body p-2">
                    <h6 class="fw-bold mb-0" style="font-size:0.85rem;">${p.nome}</h6>
                    <small class="text-muted d-block mb-1">${p.grama}</small>
                    <p class="text-success small fw-bold mb-2">R$ ${p.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}</p>
                    <button class="btn btn-success btn-sm w-100 rounded-pill fw-bold" onclick="adicionarAoCarrinho('${p.id}')">Adicionar</button>
                </div>
            </div>
        </div>`).join('');
}

function abrirDetalhes(id) {
    const p = produtos.find(x => x.id === id);
    if(p) {
        document.getElementById('detalhe-img').src = p.img;
        document.getElementById('detalhe-nome').innerText = p.nome;
        document.getElementById('detalhe-descricao').innerText = p.descricao;
        document.getElementById('detalhe-grama').innerText = p.grama;
        const btnModal = document.getElementById('btn-adicionar-modal');
        btnModal.onclick = () => {
            adicionarAoCarrinho(p.id);
            bootstrap.Modal.getOrCreateInstance(document.getElementById('modalDetalhes')).hide();
        };
        bootstrap.Modal.getOrCreateInstance(document.getElementById('modalDetalhes')).show();
    }
}

function filtrar(cat) {
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderizarProdutos(cat === 'todos' ? produtos : produtos.filter(p => p.categoria.toUpperCase() === cat.toUpperCase()));
}

function adicionarAoCarrinho(id) {
    const p = produtos.find(x => x.id === id);
    const item = carrinho.find(c => c.id === id);
    if (item) { item.quantidade++; } else { carrinho.push({...p, quantidade: 1}); }
    atualizarCarrinhoUI();
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(i => i.id !== id);
    atualizarCarrinhoUI();
}

function atualizarCarrinhoUI() {
    const count = document.getElementById('cart-count');
    if (count) count.innerText = carrinho.reduce((a, b) => a + b.quantidade, 0);
    const cont = document.getElementById('itens-carrinho');
    if (!cont) return;
    if (carrinho.length === 0) {
        cont.innerHTML = '<p class="text-center text-muted py-3">Seu carrinho está vazio.</p>';
        return;
    }
    cont.innerHTML = carrinho.map(i => `
        <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
            <div style="font-size:0.85rem;">
                <strong>${i.quantidade}x</strong> ${i.nome}<br>
                <small class="text-success fw-bold">R$ ${(i.preco * i.quantidade).toFixed(2).replace('.', ',')}</small>
            </div>
            <button class="btn btn-sm text-danger border-0" onclick="removerDoCarrinho('${i.id}')">
                <i class="bi bi-trash"></i>
            </button>
        </div>`).join('');
}

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