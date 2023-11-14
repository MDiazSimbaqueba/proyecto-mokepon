// window.addEventListener('load', () => {
let botonMascotaJugador = document.getElementById('boton-mascota')
let mascotaHipodoge = document.getElementById('hipodoge')
let mascotaCapipepo = document.getElementById('capipepo')
let mascotaRatigueya = document.getElementById('ratigueya')
let mascotaLangostelvis = document.getElementById('langostelvis')
let mascotaTucapalma = document.getElementById('tucapalma')
let mascotaPydon = document.getElementById('pydon')

    botonMascotaJugador.addEventListener('click', ()=>{
        if(mascotaHipodoge.checked){
            alert("Seleccionaste a Hipodoge")
        }else if(mascotaCapipepo.checked){
            alert("Seleccionaste a Capipepo")
        }else if(mascotaRatigueya.checked){
            alert("Seleccionaste a Ratigueya")
        }else if(mascotaLangostelvis.checked){
            alert("Seleccionaste a Langostelvis")
        }else if(mascotaTucapalma.checked){
            alert("Seleccionaste a Tucapalma")
        }else if(mascotaPydon.checked){
            alert("Seleccionaste a Pydon")
        }else{
            alert("Selecciona una mascota")
        }
    })
