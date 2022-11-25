//Variables globales

const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascotaJugador')

const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques =  document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

// Clase para Mokepones con sus atributos

class Mokepon {
    constructor(id, foto, vida, fondo) {
        this.id =id
        this.foto = foto
        this.vida = vida
        this.fondo = fondo
        this.ataques = []
    }
}

// Info mokepon (Aca se carga la informacion de cada personaje)

let hipodoge = new Mokepon( 'Hipodoge', 'https://assets10.lottiefiles.com/private_files/lf30_kullgmck.json', 5,  '#D3CB7A' )

let capipepo = new Mokepon( 'Capipepo', 'https://assets9.lottiefiles.com/private_files/lf30_gs9tkudw.json', 5,  '#E2F497' )

let ratigueya = new Mokepon( 'Ratigueya', 'https://assets4.lottiefiles.com/private_files/lf30_y7jnfzhh.json', 5,  '#D6CDEE' )

// Ataques Mokepones

hipodoge.ataques.push(
    { nombre: 'Fuego 🔥', id: 'boton-fuego'},
    { nombre: 'Fuego 🔥', id: 'boton-fuego'},
    { nombre: 'Agua 💧', id: 'boton-agua'},
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
    { nombre: 'Fuego 🔥', id: 'boton-fuego'},
    { nombre: 'Tierra 🌱', id: 'boton-tierra'},
    { nombre: 'Tierra 🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

// Iniciar juego

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach( (mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.id} />
            <label class="tarjeta-mokepon" for=${mokepon.id}>
                <lottie-player src=${mokepon.foto} background=${mokepon.fondo}  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
                <p>${mokepon.id}</p>
            </label>
            `

    contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')

    })

    sectionReiniciar.style.display = 'none'
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Seleccion de mascota jugador

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

// Funcionamiento Ataques

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].id) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'Fuego 🔥' ) {
                ataqueJugador.push('Fuego 🔥')
                console.log(ataqueJugador)
                boton.style.background = '#b27b20'
            } else if (e.target.textContent === 'Agua 💧') {
                ataqueJugador.push('Agua 💧')
                console.log(ataqueJugador)
                boton.style.background = '#00a5ac'
            } else {
                ataqueJugador.push('Tierra 🌱')
                console.log(ataqueJugador)
                boton.style.background = '#568a1e'
            }
        })
    })
}

// Seleccion de mascota enemigo

function seleccionarMascotaEnemigo() {

    let mascotaAleatorio = aleatorio(0, mokepones.length -1) // De esta manera toma el valor de la cantidad de mokepones que hay
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].id
    secuenciaAtaque()
}

// Funcion numero aleatorio

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
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