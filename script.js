// --- 1. CONFIGURAÇÕES E ESTADO ---
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let revendedoraAtiva = null;


function carregarBanner() {
    const banner = produtos.find(p => p.categoria === 'BANNER');

    if (banner) {
        const bannerPrincipal = document.getElementById('banner-principal');

        bannerPrincipal.style.backgroundImage = `
            linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
            url('${banner.img}')
        `;

        bannerPrincipal.style.backgroundSize = 'cover';
        bannerPrincipal.style.backgroundPosition = 'center';
        bannerPrincipal.style.backgroundRepeat = 'no-repeat';
    }
}

function verificarParametroRevendedora() {

    const params = new URLSearchParams(window.location.search);

    const codigo = params.get('ref');

    if (!codigo) return;

    const rev = revendedoras.find(
        r => r.codigo.trim().toUpperCase() === codigo.trim().toUpperCase()
    );

    if (rev) {

        revendedoraAtiva = rev;

        document.getElementById('tela-bloqueio').style.display = 'none';

        document.getElementById('conteudo-principal').style.display = 'block';

        const banner = document.getElementById('nome-revendedora-banner');

        if (banner) {
            banner.innerHTML = `
                <div class="banner-camomila text-center fw-bold">
                    <i class="bi bi-person-check"></i>
                    Atendida por: ${rev.nome}
                </div>
            `;
        }
    }
}
// --- 2. FUNÇÃO DE INICIALIZAÇÃO ---
function inicializar() {
    carregarBanner();
    renderizarVitrine();
    atualizarCarrinhoUI();
    verificarParametroRevendedora();

    const loader = document.getElementById('mensagem-carregando');

    if (loader) loader.style.display = 'none';
}

// --- 3. RENDERIZAÇÃO DA VITRINE ---
function renderizarVitrine() {
    const vDestaque = document.getElementById('vitrine-destaque');
    const vGeral = document.getElementById('vitrine');

    const htmlCard = (p) => `
        <div class="col-6 col-md-4 col-lg-3 mb-3">
            <div class="card card-produto shadow-sm h-100 border-0 rounded-4 overflow-hidden">
                ${p.statusCampanha ? `
                    <span class="badge-especial ${
                        p.statusCampanha === 'PROMOÇÃO'
                            ? 'badge-promocao'
                            : 'badge-ultimo-ciclo'
                    }">
                        ${p.statusCampanha}
                    </span>
                ` : ''}
                
                <div class="img-container">
                    <img src="${p.img}" class="card-img-top" onclick="abrirDetalhes('${p.id}')" style="cursor:pointer">
                </div>
                <div class="card-body p-2 text-center">
                    <h6 class="fw-bold">${p.nome}</h6>
                    ${(p.precoOriginal && p.precoOriginal > p.preco) ? `<small class="text-decoration-line-through text-muted" style="font-size:0.75rem">R$ ${p.precoOriginal.toFixed(2).replace('.',',')}</small><br>` : ''}
                    <p class="text-success fw-bold">R$ ${p.preco.toFixed(2).replace('.',',')}</p>
                    <button class="btn btn-success btn-sm w-100 rounded-pill fw-bold" onclick="adicionarAoCarrinho('${p.id}')">Adicionar</button>
                </div>
            </div>
        </div>`;

    if (vDestaque) {

    const destaquesOrdenados = produtos
        .filter(p => p.destaque)
        .sort((a, b) => {

            const ordem = {
                'PROMOÇÃO': 1,
                'ÚLTIMO CICLO': 2
            };

            return (ordem[a.statusCampanha] || 99) - (ordem[b.statusCampanha] || 99);
        });

    vDestaque.innerHTML = destaquesOrdenados.map(htmlCard).join('');
}
    if (vGeral) vGeral.innerHTML = produtos
        .filter(p => p.categoria !== 'BANNER')
        .map(htmlCard)
        .join('');
}

// --- FUNÇÃO FILTRAR ---
function filtrar(categoria) {
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let listaFiltrada = categoria === 'todos' 
        ? produtos 
        : produtos.filter(p => p.categoria.toUpperCase() === categoria.toUpperCase());

    const vGeral = document.getElementById('vitrine');
    
    const htmlCard = (p) => `
        <div class="col-6 col-md-4 col-lg-3 mb-3">
            <div class="card card-produto shadow-sm h-100 border-0 rounded-4 overflow-hidden">
                ${p.statusCampanha ? `<span class="badge-especial">${p.statusCampanha}</span>` : ''}
                <div class="img-container">
                    <img src="${p.img}" class="card-img-top" onclick="abrirDetalhes('${p.id}')" style="cursor:pointer">
                </div>
                <div class="card-body p-2 text-center">
                    <h6 class="fw-bold">${p.nome}</h6>
                    ${(p.precoOriginal && p.precoOriginal > p.preco) ? `<small class="text-decoration-line-through text-muted" style="font-size:0.75rem">R$ ${p.precoOriginal.toFixed(2).replace('.',',')}</small><br>` : ''}
                    <p class="text-success fw-bold">R$ ${p.preco.toFixed(2).replace('.',',')}</p>
                    <button class="btn btn-success btn-sm w-100 rounded-pill fw-bold" onclick="adicionarAoCarrinho('${p.id}')">Adicionar</button>
                </div>
            </div>
        </div>`;

    vGeral.innerHTML = listaFiltrada.map(htmlCard).join('') || '<p class="text-center p-4">Nenhum produto nesta categoria.</p>';
} // <--- FECHAMENTO DA FUNÇÃO FILTRAR ADICIONADO AQUI

// --- 4. FUNÇÕES DE LOGIN ---
function verificarAcesso() {
    const valorDigitado = document.getElementById('input-codigo').value.trim().toUpperCase();
    
    // Verificação de segurança para o site não travar se o config.js falhar
    if (typeof revendedoras === 'undefined') {
        alert("Erro: Lista de revendedoras não carregada. Verifique o arquivo config.js.");
        return;
    }

    // Comparamos limpando espaços de ambos os lados
    const rev = revendedoras.find(r => r.codigo.trim().toUpperCase() === valorDigitado);

    if (rev) {
        revendedoraAtiva = rev;
        document.getElementById('tela-bloqueio').style.display = 'none';
        document.getElementById('conteudo-principal').style.display = 'block';
        
        const banner = document.getElementById('nome-revendedora-banner');
        if (banner) {
            banner.innerHTML = `
                <div class="banner-camomila text-center fw-bold">
                    <i class="bi bi-person-check"></i> Atendida por: ${rev.nome}
                </div>`;
        }
    } else {
        document.getElementById('erro-login').style.display = 'block';
    }
}

// --- 5. FUNÇÕES DO CARRINHO ---
function adicionarAoCarrinho(id) {
    const p = produtos.find(x => x.id === id);
    const item = carrinho.find(c => c.id === id);
    if (item) item.quantidade++; else carrinho.push({...p, quantidade: 1});
    atualizarCarrinhoUI();
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(i => i.id !== id);
    atualizarCarrinhoUI();
}

function atualizarCarrinhoUI() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    document.getElementById('cart-count').innerText = carrinho.reduce((a, b) => a + b.quantidade, 0);
    const cont = document.getElementById('itens-carrinho');
    if (cont) {
        cont.innerHTML = carrinho.length === 0 ? '<p class="text-muted text-center">Carrinho vazio.</p>' : carrinho.map(i => `
            <div class="d-flex align-items-center mb-3 border-bottom pb-2">
                <img src="${i.img}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; margin-right: 10px;">
                <div class="flex-grow-1">
                    <div class="fw-bold small">${i.nome}</div>
                    <div class="text-muted small">${i.quantidade}x - R$ ${(i.preco * i.quantidade).toFixed(2).replace('.',',')}</div>
                </div>
                <button class="btn btn-sm text-danger" onclick="removerDoCarrinho('${i.id}')"><i class="bi bi-trash"></i></button>
            </div>
        `).join('');
    }
}

function finalizarNoWhats() {
    if (!revendedoraAtiva) return alert("Selecione uma revendedora primeiro.");
    const nome = document.getElementById('cliente-nome').value.trim();
    const pagamento = document.getElementById('pagamento-metodo').value; 
    if (!nome) return alert("Por favor, informe seu nome.");
    
    let msg = `*Pedido Camomila*\n*Revendedora:* ${revendedoraAtiva.nome}\n*Cliente:* ${nome}\n*Pagamento:* ${pagamento}\n\n`;
    msg += carrinho.map(i => `• ${i.quantidade}x ${i.nome} - R$ ${(i.preco * i.quantidade).toFixed(2)}`).join('\n');
    msg += `\n\n*Total: R$ ${carrinho.reduce((a, i) => a + (i.preco * i.quantidade), 0).toFixed(2)}*`;
    
    window.open(`https://wa.me/${revendedoraAtiva.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    carrinho = [];
    atualizarCarrinhoUI();
    
    bootstrap.Modal.getInstance(document.getElementById('modalCarrinho')).hide();
    alert("Pedido enviado com sucesso!");
}

// --- FUNÇÃO PARA ABRIR O MODAL DO CARRINHO ---
function abrirCarrinho() {
    const modalElement = document.getElementById('modalCarrinho');
    if (modalElement) {
        const modalCarrinho = new bootstrap.Modal(modalElement);
        modalCarrinho.show();
    } else {
        console.error("Erro: O modal com id 'modalCarrinho' não foi encontrado no HTML.");
    }
}
// --- 6. MODAL DETALHES ---
function abrirDetalhes(id) {
    const p = produtos.find(x => x.id === id);
    document.getElementById('detalhe-nome').innerText = p.nome;
    document.getElementById('detalhe-descricao').innerText = p.descricao;
    document.getElementById('detalhe-img').src = p.img;
    document.getElementById('detalhe-grama').innerText = p.grama;
    document.getElementById('btn-adicionar-modal').onclick = () => {
        adicionarAoCarrinho(p.id);
        bootstrap.Modal.getInstance(document.getElementById('modalDetalhes')).hide();
    };
    new bootstrap.Modal(document.getElementById('modalDetalhes')).show();
}

window.addEventListener('DOMContentLoaded', () => {
    inicializar();
});