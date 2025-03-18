let intento = 6;
let bloqueoletra = document.getElementById("p2");
bloqueoletra.disabled = true;
let bloqueoletrab = document.getElementById("p8");
bloqueoletrab.disabled = true;
let letrasUsadas = [];

function adivinar() {
    let palabra = document.getElementById("p1").value;
    let text = "";
    let bloqueoadivina = document.getElementById("p1");
    bloqueoadivina.disabled = true;
    
    let bloqueoadivinab = document.getElementById("p7");
    bloqueoadivinab.disabled = true;
    for (let intento = 0 ; intento < palabra.length ; intento++) {
        text = text + "*";
    }
    bloqueoletra.disabled = false;
    bloqueoletrab.disabled = false;
    document.getElementById("p3").innerHTML = text;
}

function progreso() {
    let letra = document.getElementById("p2").value.toLowerCase();
    let palabra = document.getElementById("p1").value;
    let nueva = "";
    let text = document.getElementById("p3").innerHTML;
    let estado = false;

    if (letra == "") {
        alert("Tienes que introducir una letra pa jugar miarma");
        return;
    }

    if (!letrasUsadas.includes(letra)) {
        letrasUsadas = letrasUsadas.concat(letra);
        document.getElementById("letrasUsadas").innerHTML = "Letras usadas: " + letrasUsadas.join(", ");
    }

    for (let prueba = 0 ; prueba < palabra.length ; prueba++) {
        if (letra == palabra[prueba].toLowerCase()) {
            nueva = nueva + palabra[prueba];
            estado = true;
        } else {
            nueva = nueva + text[prueba];
        }
    }

    if (estado == false) {
        intento = intento - 1;
        document.getElementById("p4").innerHTML = intento;
        fotos();
    }

    document.getElementById("p3").innerHTML = nueva;

    if (nueva == palabra) {
        window.location.href = "Has_Ganado.html";
    }

    if (intento < 0) {
        document.getElementById("p4").innerHTML = 0;
    }
}

function help() {
    let palabra = document.getElementById("p1").value;
    if (palabra == "") {
        alert("Si no introduces una palabra como te ayudo chiqui");
        return;
    }
    let ayuda = "";
    let nueva = document.getElementById("p3").innerHTML;
    let vocales = ['a', 'e', 'i', 'o', 'u'];

    intento = intento - 1;
    document.getElementById("p4").innerHTML = intento;

    for (let ayudita = 0; ayudita < palabra.length; ayudita++) {
        if (vocales.includes(palabra[ayudita].toLowerCase())) {
            ayuda = ayuda + palabra[ayudita];
        } else {
            ayuda = ayuda + nueva[ayudita];
        }
    }

    document.getElementById("p3").innerHTML = ayuda;

    for (let i = 0; i < vocales.length; i++) {
        if (!letrasUsadas.includes(vocales[i])) {
            letrasUsadas.push(vocales[i]);
        }
    }

    document.getElementById("letrasUsadas").innerHTML = "Letras usadas: " + letrasUsadas.join(", ");
    c = c - 15;
    fotos();
    let bloqueohelp = document.getElementById("p5");
    bloqueohelp.disabled = true;
}

let c = 60;
let t;
let timer_is_on = 0;

function timedCount() {
    document.getElementById("p6").value = c;
    c = c - 1;
    t = setTimeout(timedCount, 1000);
    if (c < 0) {
        window.location.href = "ventana_final.html";
    }
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function fotos() {
    if (intento == 5) {
        document.getElementById("Imagen").src = "ahorcado_2.png";
    }
    if (intento == 4) {
        document.getElementById("Imagen").src = "ahorcado_3.png";
    }
    if (intento == 3) {
        document.getElementById("Imagen").src = "ahorcado_4.png";
    }
    if (intento == 2) {
        document.getElementById("Imagen").src = "ahorcado_5.png";
    }
    if (intento == 1) {
        document.getElementById("Imagen").src = "ahorcado_6.png";
    }
    if (intento == 0) {
        document.getElementById("Imagen").src = "ahorcado_7.png";
        window.location.href = "ventana_final.html";
    }
}

function reinicio() {
    let vacio = "";
    document.getElementById("p2").value = vacio;
}