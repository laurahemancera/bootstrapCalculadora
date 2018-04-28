window.onload= function()
{
    const nomDiv = div => document.getElementById(div);
    const suma = () => {
        let primerNumerador=nomDiv("primerNumerador").value;
        let primerDenominador=nomDiv("primerDenominador").value;
        let segundoNumerador=nomDiv("segundoNumerador").value;
        let segundoDenominador=nomDiv("segundoDenominador").value;
        if (primerNumerador.length ===0 || primerDenominador.length ===0) {
            alert("porfavor completa los campos");
        } else 
        {
            const respuesta = ((primerNumerador*segundoDenominador)+(primerDenominador*segundoNumerador))/(primerDenominador*segundoDenominador);
            nomDiv("respuesta").innerHTML = "la suma de fraccionarios es:"+ respuesta.toFixed(2);
        }
    }
    
    const resta = () => {
        let primerNumerador=nomDiv("primerNumerador").value;
        let primerDenominador=nomDiv("primerDenominador").value;
        let segundoNumerador=nomDiv("segundoNumerador").value;
        let segundoDenominador=nomDiv("segundoDenominador").value;
        if (primerNumerador.length===0||primerDenominador.length===0) {
            alert("porfavor completa los campos");
        }
        else {
            const respuesta = ((primerNumerador*segundoDenominador)-(primerDenominador*segundoNumerador))/(primerDenominador*segundoDenominador);
            nomDiv("respuesta").innerHTML= "la resta de fraccionarios es:"+ respuesta.toFixed(2);
        }
    }

    const multiplicacion = () => {
        let primerNumerador=nomDiv("primerNumerador").value;
        let primerDenominador=nomDiv("primerDenominador").value;
        let segundoNumerador=nomDiv("segundoNumerador").value;
        let segundoDenominador=nomDiv("segundoDenominador").value;
        if (primerNumerador.length === 0 || primerDenominador.length === 0) {
            alert("porfavor completa los campos");
        }
        else {
            const respuesta = ((primerNumerador*segundoNumerador)/(primerDenominador*segundoDenominador))
            nomDiv("respuesta").innerHTML= "la multiplicacion de fraccionarios es:"+ respuesta.toFixed(2);
        }
    }

    const division = () => {
        let primerNumerador=nomDiv("primerNumerador").value;
        let primerDenominador=nomDiv("primerDenominador").value;
        let segundoNumerador=nomDiv("segundoNumerador").value;
        let segundoDenominador=nomDiv("segundoDenominador").value;
        if (primerNumerador.length === 0 || primerDenominador.length === 0) {
            alert("porfavor completa los campos");
        } else 
        {
            const respuesta = ((primerNumerador*segundoDenominador)/(primerDenominador*segundoDenominador));
            nomDiv("respuesta").innerHTML= "la división de fraccionarios es:"+ respuesta.toFixed(2);
        }

    }

    nomDiv("suma").addEventListener("click", function(event) {
        suma();
    });
    nomDiv("resta").addEventListener("click", function(event){
        resta();
    });
    nomDiv("multiplicacion").addEventListener("click", function(event){
        multiplicacion();
    });

    nomDiv("division").addEventListener("click", function(event) {
        division();
    });    
};