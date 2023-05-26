/**
 * Conversión de unidades de yardas, metros, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de yardas, metros, pies o pulgadas
 * @param {number} valor - El valor de yardas, metros, pies o pulgadas
 * @return
 */

function cambiarUnidades(id, valor){
    var metro, pulgada, pie, yarda;
    if(valor.includes(";")){
        valor = valor.replace(",", ".");
    }
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido" + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if(id=="pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
    }else if(id=="pie"){
        pie = valor;
        pulgada = 12 * valor;
        metro = 0.3048*valor;
        yarda = 0.333333*valor;
    }else if(id=="yarda"){
        yarda = valor;
        pulgada = 36*valor;
        pie = 3*valor;
        metro = 0.9144*valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

function convertirGR(id){
    var rad, grad;
    if(id=="grados"){
        grad = document.getElementById(elementId:"grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById(elementId: "radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById(elementId:"grados").value = grad;
    document.getElementById(elementId:"radianes").value = rad;
}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById(elementId:"divMO").style.display = 'block';
    }else if(valorMO=="valo_ocultar"){
        document.getElementById(elementId:"divMO").style.display = 'none';
    }
}

function calcularSuma(){
    var num1, num2;
    num1 = document.getElementsByName(elementName: "sum_num1")[0].value;
    num2 = document.getElementsByName(elementName: "sum_num2")[0].value;
    document.getElementsByName(elementName:"sum_total")[0].value = Number(num1) + Number(num2);
}
function calcularResta(){
    var num1, num2;
    num1 = document.getElementsByName(elementName: "res_num1")[0].value;
    num2 = document.getElementsByName(elementName: "res_num2")[0].value;
    document.getElementsByName(elementName:"res_total")[0].value = Number(num1) - Number(num2);
}

function calcularMultiplicacion(){
    var num1, num2;
    num1 = document.getElementsByName(elementName: "mul_num1")[0].value;
    num2 = document.getElementsByName(elementName: "mul_num2")[0].value;
    document.getElementsByName(elementName:"mul_total")[0].value = Number(num1) * Number(num2);
}

function calcularDivision(){
    var num1, num2;
    num1 = document.getElementsByName(elementName: "div_num1")[0].value;
    num2 = document.getElementsByName(elementName: "div_num2")[0].value;
    document.getElementsByName(elementName:"div_total")[0].value = Number(num1) / Number(num2);
}