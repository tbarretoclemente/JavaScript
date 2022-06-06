// ARRAY LISTA DE CARROS

let listaCarros = ["Posche", "Ferrai", "Lamborguine", "Jaguar"];
let Ano = ["2007", "2002", "2019", "2021"];
document.querySelector(".displayListaCarro").textContent = `Lista de carros: ${listaCarros}`;
document.querySelector(".displayListaCarro--1").textContent = `1º- ${listaCarros[0]} - ${Ano[0]}`;
document.querySelector(".displayListaCarro--2").textContent = `2º- ${listaCarros[1]} - ${Ano[1]}`;
document.querySelector(".displayListaCarro--3").textContent = `3º- ${listaCarros[2]} - ${Ano[2]}`;
document.querySelector(".displayListaCarro--4").textContent = `4º- ${listaCarros[3]} - ${Ano[3]}`;


// ARRAY LISTA DE FRUTAS

let listaFrutas = ["Goiaba","Manga","Laranja"];
let listaFrutas1 = ["Função",function(){
    console.log("Chamando uma function no array: Thiago");
}];
document.querySelector(".displayListaFrutas").textContent = `${listaFrutas}`;
// chamando function do array 
listaFrutas1[1]();

// ARRAY DE ARRAY's

let listaAnime = [
    ["Naruto","SpyxFamily","Boku no Hero"],
    ["2000","2022","2018"]
];


document.querySelector(".displayListaAnimes").textContent = listaAnime[0];
document.querySelector(".displayListaAnimes--Ano").textContent = listaAnime[1];

document.querySelector(".displayListaAnimes--1").textContent = `${listaAnime[0][0]} - ${listaAnime[1][0]}`;
document.querySelector(".displayListaAnimes--2").textContent = `${listaAnime[0][1]} - ${listaAnime[1][1]}`;
document.querySelector(".displayListaAnimes--3").textContent = `${listaAnime[0][2]} - ${listaAnime[1][2]}`;