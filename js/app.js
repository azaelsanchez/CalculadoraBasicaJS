
let calculo = {
    suma: () => {
        let numero1=document.getElementById("numero1").value;
        let numero2=document.getElementById("numero2").value;
        document.getElementById("resultado").innerHTML= `La suma entre ${numero1} y ${numero2} es: ${Number(numero1) + Number(numero2)}`;
    },
    resta: () => {
        let numero1=document.getElementById("numero1").value;
        let numero2=document.getElementById("numero2").value;
        document.getElementById("resultado").innerHTML= `La resta entre ${numero1} y ${numero2} es: ${Number(numero1) - Number(numero2)}`;
    },
    multiplicacion: () => {
        let numero1=document.getElementById("numero1").value;
        let numero2=document.getElementById("numero2").value;
        document.getElementById("resultado").innerHTML= `La multiplicacion entre ${numero1} y ${numero2} es: ${Number(numero1) * Number(numero2)}`;
    },
    division: () => {
       let numero1=document.getElementById("numero1").value;
       let numero2=document.getElementById("numero2").value;
        document.getElementById("resultado").innerHTML= `La division entre ${numero1} y ${numero2} es: ${Number(numero1) / Number(numero2)}`;
    }
};