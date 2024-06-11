// Declarar variaveis
const numeroPokemon = document.querySelector('.pokemon__number'), nomePokemon = document.querySelector('.pokemon__name'), imagePokemon = document.querySelector('.pokemon_imagem'), form = document.querySelector('.form'), input = document.querySelector('.input_search'), buttonPrev = document.querySelector('.btn-prev'), buttonNext = document.querySelector('.btn-next');

let contadora;

//  Receber resposta da API
const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }

};
const renderpokemon = async (pokemon) => {
    nomePokemon.textContent = "carregando..."
    imagePokemon.src ="https://media.tenor.com/a2tshkHR6RsAAAAi/run-pikachu.gif"

    // https://media.tenor.com/HOZmxLX55XsAAAAi/pokemon-pikachu.gif

    const data = await fetchPokemon(pokemon);

    if (data) {
  
        numeroPokemon.textContent = data.id;
        nomePokemon.textContent = data.name;
        imagePokemon.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        input.value = "";
        console.log(data);
        contadora = data.id;

    } else { 
        imagePokemon.src ="https://media.tenor.com/pYAjdsSGlvoAAAAi/pokemon.gif"
        nomePokemon.textContent = "Não encontrado :(";
        numeroPokemon.textContent = ""

    }

    // imagePokemon= "setTimeout(data, 2000)" function data(){
    //     alert('hello');

    // }
};


form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderpokemon(input.value.toLowerCase());

});

buttonPrev.addEventListener("click", () => { 
    
    if (contadora > 1) { 
        contadora > 1    
        contadora -= 1
        renderpokemon(contadora)
    }
});


buttonNext.addEventListener("click", () => { 
        contadora < 1    
        contadora += 1
        renderpokemon(contadora)
});

renderpokemon(1);
