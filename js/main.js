

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    console.log(document.getElementById("agradecimento"));
//    alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://git-scm.com/");
    //window.location.href = "https://git-scm.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
   // alert("Trocar texto")
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false    
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count;
for(count=0; count <= 5; count++){
    alert(count)
}
*/

/*
var count = 0
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/


/*
var idade = prompt("Qual sua idade");
if (idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
};
*/


//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas)
//alert(frutas[1].nome)


//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" - "));



//var nome = "Lucas Chiaratti";
//var n1 = 35;
//var n2 = 10;
//var frase = "Real é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos"
//alert(idade + idade2)
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Real","Santos"));
//alert(frase.replace("Real", "Santos"));
//console.log(frase.toLowerCase());