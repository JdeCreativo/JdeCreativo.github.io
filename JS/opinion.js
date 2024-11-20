const btn_opinar = document.getElementById("btn_opinar");
const cuadro_opinar = document.getElementById("inicio_opinar");

const input_nombre = formulario.querySelector("#nombre_input");
const input_opinion = formulario.querySelector("#coment_input");

function abrir(){
    cuadro_opinar.style.display= "flex";

    input_nombre.value ="";
    input_opinion.value = "";
}

function cerrar(){
    cuadro_opinar.style.display = "none"
    alert("Su opinión fue enviada");
}