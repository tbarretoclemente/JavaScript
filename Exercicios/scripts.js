// EXERCICIOS

// EXERCICIO 1000
let helloWorld = document.querySelector(".displayExe1000");
helloWorld.innerHTML = "Hello World";

// EXERCICIO 1001
let valorA, valorB, valorX;
valorA = 10;
valorB = 20;
valorX = valorA + valorB
let displayExe1001 = document.querySelector(".displayExe1001");
displayExe1001.innerHTML = `A soma entre ${valorA} e ${valorB} é igual: ${valorX}`;

// EXERCICIO 1002

let areaCircunferencia = 3.1415
let raioCircunferencia = 5
let displayExe1002 = document.querySelector(".displayExe1002");
displayExe1002.innerHTML = `Resultado da circunferência entre ${areaCircunferencia} e ${raioCircunferencia}² é: ${Math.pow(raioCircunferencia,2) * areaCircunferencia}`;

// EXERCICIO 1003
valorSomaA = 20;
valorSomaB = 40;
soma = valorSomaA + valorSomaB;
let displayExe1003 = document.querySelector(".displayExe1003");
displayExe1003.innerHTML = `Resultado da da soma entre ${valorSomaA} e ${valorSomaB} é: ${soma}`;


// EXERCICIO 1004
let valorProdA = 3;
let valorProdB = 9;
let produto = valorProdA * valorProdB;
let displayExe1004 = document.querySelector(".displayExe1004");
displayExe1004.innerHTML = `Resultado do produto entre ${valorProdA} e ${valorProdB} é: ${produto}`;


// EXERCICIO 1005
let notaA1 = 5;
let notaA2 = 6;
let media = (notaA1+notaA2) / 2;
let displayExe1005Nota = document.querySelector(".displayExe1005Nota");
displayExe1005Nota.innerHTML = `Nota A1: ${notaA1} <br> Nota A2: ${notaA2}`;
if(media >= 6){
    let displayExe1005 = document.querySelector(".displayExe1005");
    displayExe1005.innerHTML = `Aluno Aprovado com média: ${media}`;
}else{
    let displayExe1005 = document.querySelector(".displayExe1005");
    displayExe1005.innerHTML = `Aluno Reprovado com média: ${media}`;
}

// EXERCICIO 1006
let notaB1 = 9.25;
let notaB2 = 7.95;
let notaB3 = 6.75;

let mediaB = (notaB1+notaB2+notaB3) / 3;
let displayExe1006Nota = document.querySelector(".displayExe1006Nota");
displayExe1006Nota.innerHTML = `Nota B1: ${notaB1} <br> Nota B2: ${notaB2} <br> Nota B3: ${notaB3}`;

if(mediaB >= 8){
    let displayExe1006 = document.querySelector(".displayExe1006");
    displayExe1006.innerHTML = `Aluno Aprovado com média: ${mediaB}`;
}else if(mediaB >=5 && mediaB <= 7.99){
    let displayExe1006 = document.querySelector(".displayExe1006");
    displayExe1006.innerHTML = `Aluno esta de Recuperação com média: ${mediaB}`;
}else{
    let displayExe1006 = document.querySelector(".displayExe1006");
    displayExe1006.innerHTML = `Aluno Reprovado com média: ${mediaB}`;
    
}


// EXERCICIO 1007
let horasTrabalhadas = 160;
let valorHora = 12;
let salario = horasTrabalhadas * valorHora;

let displayExe1007Salario = document.querySelector(".displayExe1007Salario");
displayExe1007Salario.innerHTML = `Horas Trabalhadas: ${horasTrabalhadas} horas <br> Valor hora R$: ${valorHora} reais`;

let displayExe1007 = document.querySelector(".displayExe1007");
displayExe1007.innerHTML = `Salário R$: ${salario} reais`;

// EXERCICIO 1008
let horasTrabalhadasB = 160;
let valorHoraB = 15;
let salarioB = (horasTrabalhadasB * valorHoraB);
let bonusA = salario * 0.15;
let bonusB = salario * 0.25;

let displayExe1008Salario = document.querySelector(".displayExe1008Salario");
displayExe1008Salario.innerHTML = `Horas Trabalhadas: ${horasTrabalhadasB} horas <br> Valor hora R$: ${valorHoraB} reais`;

let displayExe1008 = document.querySelector(".displayExe1008");
displayExe1008.innerHTML = `Salário R$: ${salarioB} reais + bônus de: ${bonusA} reais <br> Salário a receber: ${salarioB + bonusA} reais`;


// EXERCICIO 1009
// EXERCICIO 1010
// EXERCICIO 1011
// EXERCICIO 1012
// EXERCICIO 1013
// EXERCICIO 1014
// EXERCICIO 1015
// EXERCICIO 1016
// EXERCICIO 1017
// EXERCICIO 1018
// EXERCICIO 1019
// EXERCICIO 1020