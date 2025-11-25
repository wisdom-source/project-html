/* ==========================================================================
   SELEÇÃO DOS ELEMENTOS DO HTML (DOM)
   Usamos 'const' porque esses elementos não vão mudar.
   ========================================================================== */
const circulo = document.querySelector(".circulo");
const imagemCopo = document.querySelector(".imagem-copo");
const logo = document.querySelector(".logo");
const botoesMenu = document.querySelectorAll(".botao-menu");
const titulo = document.getElementById("titulo-bebida");
// const descricao = document.getElementById("descricao-bebida"); // Descomente se for usar

/* ==========================================================================
   DADOS DAS BEBIDAS
   Manter os dados aqui facilita adicionar ou remover bebidas no futuro.
   ========================================================================== */
const bebidas = [
    {
        cor: '#017143',
        imagem: 'img/img1.png',
        titulo: 'Frappuccino Clássico'
    },
    {
        cor: '#eb7495',
        imagem: 'img/img2.png',
        titulo: 'Frappuccino de Morango'
    },
    {
        cor: '#d752b1',
        imagem: 'img/img3.png',
        titulo: 'Frappuccino de Açaí'
    }
];

/* ==========================================================================
   FUNÇÕES E EVENTOS
   ========================================================================== */

// Evento de clique no logo para recarregar a página
logo.addEventListener("click", () => {
    location.reload();
});

// Adiciona um evento de clique para CADA botão do menu
botoesMenu.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        // Pega os dados da bebida correspondente ao botão clicado
        const bebidaSelecionada = bebidas[index];

        // 1. Remove a classe 'ativo' de todos os botões
        botoesMenu.forEach(b => b.classList.remove("ativo"));

        // 2. Adiciona a classe 'ativo' apenas no botão clicado
        botao.classList.add("ativo");

        // 3. Aplica a animação de troca no copo
        imagemCopo.classList.add('animating');

        // 4. Altera os elementos na tela com os dados da bebida
        circulo.style.backgroundColor = bebidaSelecionada.cor;
        imagemCopo.src = bebidaSelecionada.imagem;
        titulo.innerHTML = `É mais que <span class="texto-starbucks">${bebidaSelecionada.titulo}</span>`;

        // 5. Remove a classe de animação após ela terminar
        setTimeout(() => {
            imagemCopo.classList.remove('animating');
        }, 400); // 400ms = duração da animação no CSS
    });
});