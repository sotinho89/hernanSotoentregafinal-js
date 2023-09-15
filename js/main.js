

 function render(simpson) {
    
    document.querySelector('h1').textContent = simpson.name;
    document.querySelector('#imagen').setAttribute('src', simpson)


}

async function getSimpson(id) {
    try {
        const res = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=20&page=2/${id}`);
        const data = await res.json();
        return data;
    } catch (e) {
        alert("Error: " + e)
    }
}

async function init() {
    const simpson = await getSimpson(150);
    render(simpson);
}

let search = document.querySelector('#search')
search.addEventListener('change', async () => {
    const simpson = await getSimpson(search.value.toLowerCase());
    render(simpson);
})

init();
