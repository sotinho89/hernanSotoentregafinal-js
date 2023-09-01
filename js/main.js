 // https://pokeapi.co/api/v2/pokemon/{id or name}/

 function render(pokemon) {
    //console.log(pokemon)
    document.querySelector('h1').textContent = pokemon.name;
    document.querySelector('#imagen').setAttribute('src', pokemon.sprites.front_shiny)


}

async function getPokemon(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        return data;
    } catch (e) {
        alert("Error: " + e)
    }
}

async function init() {
    const pokemon = await getPokemon(150);
    render(pokemon);
}

let search = document.querySelector('#search')
search.addEventListener('change', async () => {
    const pokemon = await getPokemon(search.value.toLowerCase());
    render(pokemon);
})

init();
