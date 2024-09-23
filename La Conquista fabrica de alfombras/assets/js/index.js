window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};


// Validación y envío del formulario.
const $form = document.getElementById('contactForm');
const $nombre = document.getElementById('nombre');
const $email = document.getElementById('email');
const $mensaje = document.getElementById('mensaje');

$form.addEventListener('submit', e => {
    e.preventDefault();

    if (checkInputs()) {
        enviarFormulario(); 
    }
});

function checkInputs() {
    let isValid = true;
    const nombreValue = $nombre.value.trim();
    const emailValue = $email.value.trim();
    const mensajeValue = $mensaje.value.trim();
    
    if(nombreValue === ''){
        setErrorFor($nombre,'No puede dejar el nombre en blanco');
        isValid = false;
    } else if (!nomvalido(nombreValue)){
        setErrorFor($nombre,'No ingreso un nombre valido');    
        isValid = false;
    } else {
        setSuccessFor($nombre);
    }

    if(emailValue === ''){
        setErrorFor($email,'No puede dejar el email en blanco');     
        isValid = false;
    } else if (!isEmail(emailValue)){
        setErrorFor($email,'No ingreso un email valido');
        isValid = false;
    } else { 
        setSuccessFor($email);
    }

    if(mensajeValue === ''){
        setErrorFor($mensaje,'No puede dejar el mensaje en blanco');     
        isValid = false;
    } else {
        setSuccessFor($mensaje);
    }

    return isValid; 
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error'; 
    small.innerText = message; 
}


function isEmail(email){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function nomvalido(nombre){
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/.test(nombre);
}

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('contactForm')) {
      form.reset();
    }
}



