let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operacion = document.getElementById("operacion");
let evento = document.getElementById("btn_operar");
let respuesta = document.getElementById("resultado");
let nueva_operacion;

class aritmetica{
        sumar(n1,n2){
        let res = n1+n2;
        return res;
    }
        restar(n1,n2){
        let res = n1-n2;
        return res;
    }
        multiplicar(n1,n2){
        let res = n1*n2;
        return res;
    }
        dividir(n1,n2){
        let res = n1/n2;
        return res;
    }

}

evento.addEventListener("click",() =>{
    let val1 = parseFloat(numero1.value);
    let val2 = parseFloat(numero2.value);
    let oper = operacion.value;

    nueva_operacion = new aritmetica();
    switch(oper){
        case "suma":            
            respuesta.value = nueva_operacion.sumar(val1,val2);
            break;
        case "resta":
            respuesta.value = nueva_operacion.restar(val1,val2);
            break;
        case "multiplicacion":
            respuesta.value = nueva_operacion.multiplicar(val1,val2);
            break;
        case "division":
            respuesta.value = nueva_operacion.dividir(val1,val2);
            break;
    }   
});

