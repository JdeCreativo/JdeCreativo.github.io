const botonAceptar = document.getElementById('btn_acepatr-cookies');
const avisoCookies = document.getElementById('aviso_cookies');
const fonodAviso = document.getElementById('fondo-aviso');

dataLayer = [];

if(!localStorage.getItem('cookies_aceptadas')){
    avisoCookies.classList.add('activo');
    fonodAviso.classList.add('activo');
}
else{
    dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptar.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fonodAviso.classList.remove('activo');


    localStorage.setItem('cookies_aceptadas', true);

    dataLayer.push({'event': 'cookies-aceptadas'});
});