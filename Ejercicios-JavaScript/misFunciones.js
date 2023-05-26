/**
 * Conversión de unidades de yardas, metros, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de yardas, metros, pies o pulgadas
 * @param {number} valor - El valor de yardas, metros, pies o pulgadas
 * @return
 */

function cambiarUnidades(id, valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value = 1.09361*valor;
    }else if(id=="pulgada"){
        document.lasUnidades.unid_metro.value = 0.0254*valor;
        document.lasUnidades.unid_pie.value = 0.0833333*valor;
        document.lasUnidades.unid_yarda.value = 0.0277778*valor;
    }else if(id=="pie"){
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_yarda.value = 0.333333*valor;
    }else if(id=="yarda"){
        document.lasUnidades.unid_pulgada.value = 36*valor;
        document.lasUnidades.unid_pie.value = 3*valor;
        document.lasUnidades.unid_metro.value = 0.9144*valor;
    }
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