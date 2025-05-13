let animado = document.querySelectorAll(".animado");
let desenfoque = document.querySelectorAll(".desenfoque");

// Establece la fecha objetivo
const fechaObjetivo = new Date("2025-05-31T00:00:00").getTime(); // Cambia la fecha según lo necesites

function actualizarContador() {
    const ahora = new Date().getTime(); // Obtiene la fecha y hora actual
    const distancia = fechaObjetivo - ahora; // Calcula la distancia entre la fecha actual y la fecha objetivo

    // Calcula días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra cada unidad en su respectivo elemento
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    // Si la cuenta regresiva ha terminado
    if (distancia < 0) {
        clearInterval(intervalo); // Detiene el contador
        document.getElementById("contador").innerHTML = "¡El gran día ha llegado!";
    }
}

// Actualiza el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 900 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarAbajo");
        }
    }
}

function mostrarScrollDesenfoque() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < desenfoque.length; i++) {
        let alturaDesenfoque = desenfoque[i].offsetTop;
        if (alturaDesenfoque - 900 < scrollTop) {
            desenfoque[i].style.filter = "blur(0px)";
            desenfoque[i].classList.add("desenfocado");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', mostrarScrollDesenfoque);
