document.querySelector("button").onclick = function(){
    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value);

    let resultado = suma(numero1, numero2);
    alert("el resultado es " + resultado);

}

if(!localStorage.getItem('contador'))
{
    localStorage.setItem('contador',0)
}

let contador = localStorage.getItem('contador');

function contar()
{
    contador++;
    localStorage.setItem('contador',contador);
    document.querySelector('#contador').innerHTML = contador;
}

setInterval(contar,1000);
setTimeout(contar,100000)