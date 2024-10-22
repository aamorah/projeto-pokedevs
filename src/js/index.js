/*
OBJETIVO - Quando clicar no pokedev da listagem, temos que esconder o cartão do pokedev aberto, e mostrar o cartão correspondente ao que foi selecionado na listagem.
     PASSO 1 - Precisamos criar uma variável no JS para trabalhar com a listagem de pokedevs.
     PASSO 2 - Identificar o evento de clique no elemento da listagem.
     PASSO 3 - Remover a classe aberto só do cartão que está aberto.
     PASSO 4 - Ao clicar em um pokedev da listagem, pegamos o id desse pokedev pra saber qual cartão abrir.
     PASSO 5 - Remover a classe ativo que marca o pokedev slecionado na listagem.
     PASSO 6 - Adicionar a classe ativo no pokedev selecionado na listagem.
*/     

         
         const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

         listaSelecaoPokedevs.forEach(pokedev =>{
         pokedev.addEventListener("click", () => {

         esconderCartaoPokedev();

         const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

         desativarPokedevNaListagem();

         ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
     
    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;

    const idDocartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

    const cartaoPokedevParaAbrir = document.getElementById(idDocartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
