//hacer una secuencia de números fibonacci
const fibonacci = (number) => {
    const fibonacci = [0, 1];
    for (let i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    //retornar los números pares e impares de la secuencia fibonacci
    console.log("Fibonacci =>", fibonacci);
    console.log("Pares =>", fibonacci.filter(e => e % 2 === 0));
    console.log("Impares =>", fibonacci.filter(e => e % 2 !== 0));

};

fibonacci(17);

// 2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

const pokes = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle', 'Charmeleon', 'Weedle', 'Charizard'];

const newPokemon = (pokemon) => {
    return pokemon.map(e => e.toUpperCase());
};

console.log(newPokemon(pokes));

// 3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.

const pokemones = [{
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
];

const newPokemonArray = (pokemon) => {
    return pokemon.filter(e => e.tipo === 'Fuego');
};

console.log(newPokemonArray(pokemones));