//Variables globales

const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascotaJugador')

const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

// Clase para Mokepones

class Mokepon {
    constructor(nombre, foto, vida, lottie) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.lottie = lottie
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', 5, 'https://assets10.lottiefiles.com/private_files/lf30_kullgmck.json')

let capipepo = new Mokepon('Capipepo', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', 5, 'https://assets9.lottiefiles.com/private_files/lf30_gs9tkudw.json')

let ratigueya = new Mokepon('Ratigueya', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', 5, 'https://assets4.lottiefiles.com/private_files/lf30_y7jnfzhh.json')

hipodoge.ataques.push(
    { nombre: 'Fuego 🔥', id: 'boton-fuego'},
    { nombre: 'Fuego 🔥', id: 'boton-fuego'},
    { nombre: 'Fuego 🔥', id: 'boton-fuego'},
    { nombre: 'Tierra 🌱', id: 'boton-tierra'},
    { nombre: 'Tierra 🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    { nombre: 'Fuego 🔥', id: 'boton-fuego'},
    { nombre: 'Fuego 🔥', id: 'boton-fuego'},
    { nombre: 'Agua 💧', id: 'boton-agua'},
    { nombre: 'Tierra 🌱', id: 'boton-tierra'},
    { nombre: 'Tierra 🌱', id: 'boton-tierra'},
)

ratigueya.ataques.push(
    { nombre: 'Agua 💧', id: 'boton-agua'},
    { nombre: 'Agua 💧', id: 'boton-agua'},
    { nombre: 'Agua 💧', id: 'boton-agua'},
    { nombre: 'Tierra 🌱', id: 'boton-tierra'},
    { nombre: 'Tierra 🌱', id: 'boton-tierra'},
)



// Iniciar juego

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonFuego.addEventListener('click', ataqueFuego)    
    botonAgua.addEventListener('click', ataqueAgua)    
    botonTierra.addEventListener('click', ataqueTierra)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Seleccion de mascotas

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {

    let mascotaAleatorio = aleatorio(1,3)
    
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

// Funcion numero aleatorio

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Botones

function ataqueFuego() {
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
}

// Reiniciar Juego

function reiniciarJuego() {
    location.reload()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA 💧' 
    } else {
        ataqueEnemigo = 'TIERRA 🌱'
    }

    combate()
}

// Funcion combate

function combate () {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("¡Empate! 😶")
    } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') {
        crearMensaje("¡Ganaste! 🏅")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') {
        crearMensaje("¡Ganaste! 🏅")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧') {
        crearMensaje("¡Ganaste! 🏅")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("¡Perdiste! 😒")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

// Conteo de Vidas

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES GANASTE 🥳")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("LO SIENTO, PERDISTE 😒")
    }
}

// Mensajes

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

window.addEventListener('load', iniciarJuego) 