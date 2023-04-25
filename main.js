const pokedex = document.querySelector('.pokedex');
const pokemonSRC = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const pokemonQuantity = 1008;


for (let count = 0; count < pokemonQuantity; count++) {
    const pokemon = document.createElement('div');
    const pokemonResume = document.createElement('div');
    const pokemonNumber = document.createElement('span');
    const pokemonImage = document.createElement('img');
    const pokemonName = document.createElement('span');

    pokemon.classList.add('pokemon');

    pokemonImage.src = `${pokemonSRC}${count+1}.png`;
    pokemonImage.classList.add('pokemonImage');

    pokemonResume.classList.add('pokemonDesc')

    pokemonNumber.innerHTML = `#${count+1}`;
    pokemonNumber.classList.add('number');

    pokemonName.innerHTML = "Nome";
    pokemonName.classList.add('name');

    pokedex.appendChild(pokemon);
    pokemon.appendChild(pokemonImage);
    pokemon.appendChild(pokemonResume);
    pokemonResume.appendChild(pokemonNumber);
    pokemonResume.appendChild(pokemonName);
}

const btn = document.querySelector('.btnSearch');
const input = document.querySelector('.searchInput');

toSearch = () => {
    const pokemonImages = document.querySelectorAll('.pokemonImage');
    let requestedSRC = `${pokemonSRC}${input.value}.png`;
    
    pokemonImages.forEach((pokemonImage) => {
        pokemonImage.parentElement.classList.remove('hidden');
        pokemonImage.src === requestedSRC || input.value === '' ? '' : pokemonImage.parentElement.classList.add('hidden');
    })

    // if (input.value < 1 || input.value > pokemonQuantity) {
    //     pokemonImages.forEach((pokemonImage) => {
    //         pokemonImage.parentElement.classList.add('hidden');
    //     })

    //     alert("Não encontrado :/");
    //     return;
    // }
}

btn.addEventListener('click', () => {
    toSearch();   
})