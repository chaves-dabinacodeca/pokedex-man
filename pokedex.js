// Declarar variaveis
const numeroPokemon = document.querySelector('.pokemon__number'), nomePokemon = document.querySelector('.pokemon__name'), imagePokemon = document.querySelector('.pokemon_image'), form = document.querySelector('.form'), input = document.querySelector('.input_search'), buttonPrev = document.querySelector('.btn-prev')
buttonNext = document.querySelector('.btn-next');
let cont;

//  Receber resposta da API
const  fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }



};
const renderpokemon = async (pokemon) => {

    nomePokemon.textContent ="cargando"
    imagePokemon.src = "https://media.tenor.com/Cm7KfjVqri4AAAAi/pokemon-pokeball.gif"
    const data = await fetchPokemon(pokemon);

    if (data) {



        numeroPokemon.textContent = data.id;
        nomePokemon.textContent = data.name;
        imagePokemon.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        input.value = ""
        console.log(data);
        cont = data.id;

    } else {

        nomePokemon.textContent = "não catalogado";
        numeroPokemon.textContent = ";-;";

    }



}




form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderpokemon(input.value.toLowerCase());

});

buttonPrev.addEventListener("click", ()=> {

    if (cont > 1) {
        cont -= 1
        renderpokemon(cont)
    }
    else{}
});

buttonNext.addEventListener("click", ()=> {

        cont < 1
        cont += 1
        renderpokemon(cont)

});

renderpokemon(1)