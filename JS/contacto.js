
function accion(){
    limpiar();
    anuncio();
}
function limpiar(){

    const formulario = document.querySelector("#formulario");
    const inputNombre = formulario.querySelector("#nombre_registro");
    const inputMarca = formulario.querySelector("#marca_registro");
    const inputMotivo = formulario.querySelector("#motivo_registro");
    const inputTelefono = formulario.querySelector("#telefono_registro");

    inputNombre.value="";
    inputMarca.value="";
    inputMotivo.value="";
    inputTelefono.value="";
    
}

function anuncio(){
    alert("Registro enviado, nos pondremos en contacto en breve");
}