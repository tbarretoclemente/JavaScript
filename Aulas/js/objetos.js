// DECLARAÇÃO DE OBJETOS

// let text = "";
// let idade = 25;
// let novoCadastro = {
//     nome: "Thiago",
//     sobreNome: "Barreto Clemente",
//     idade: 30,

//     confirmarIdade: function(vIdade){
//         if(vIdade > 18){
//             console.log("Criança ou Adulto: Adulto");
//         }else{
//             console.log("Criança ou Adulto: Criança");
//         }
//     }
// }


// console.log(`Nome: ${novoCadastro.nome}\nSobreNome: ${novoCadastro.sobreNome}\nIdade:${novoCadastro.idade}`)
// novoCadastro.confirmarIdade(idade);



// DECLARAÇÃO DE OBJETO COM THIS

// const carro = {
//     nome: "Novo Fiat",
//     modelo: "Uno",
//     ano: "2022",
//     ligado: false,

//     ligarCarro: () =>{
//         this.ligado = true;
//         console.log("Ligando o " + carro.modelo);
//     },

//     acelerarCarro: () =>{
//         if(this.ligado == true){
//             console.log("Acelerando o " + carro.modelo);
//         }else{
//             console.log("o carro precisar esta ligado")
//         }
//     },

//     desligarCarro: () =>{
//         console.log("Desligando o " + carro.modelo);
//     },

//     passarMarcha: function(){
//         console.log("passou de marcha " + this.modelo);
//     }
// }

// console.log(`Carro: ${carro.nome} \nModelo: ${carro.modelo} \nAno de fabricação: ${carro.ano} `)
// console.log("FUNÇÕES");
// // carro.ligarCarro();
// // carro.acelerarCarro();
// // carro.desligarCarro();
// carro.acelerarCarro();
// carro.ligarCarro();
// carro.acelerarCarro();
// carro.passarMarcha();


// OBJETOS COM ARRAY

let monstros = [
    {nome:"Slime", hp:50},
    {nome:"Dark Soul", hp:150},
    {nome:"Gaburu", hp:250},
    {atacar: function(){
        if(monstros[0].hp <= 40){
            console.log("Atacou!!")

        }
    }}
];

console.log(`Nome: ${monstros[0].nome}\nHp: ${monstros[0].hp}`)
monstros[3].atacar();