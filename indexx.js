const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionar");
        botaoSelecionado.classList.remove("selecionar");

    botao.classList.add("selecionar");

    const personagemSelecionado = document.querySelector(".personagem.selecionar");
    personagemSelecionado.classList.remove("selecionar");

    personagens[indice].classList.add("selecionar");

    });
});