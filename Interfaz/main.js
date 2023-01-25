function Personaje(nombre, hp, ataque, inventario, oro) {
    this.nombre = nombre;
    this.hp = hp;
    this.ataque = ataque;
    this.inventario = inventario;
    this.oro = oro
}


const Mago = new Personaje("Mago", 50, 26, ["Vara", "Scroll"], 40)

const Guerrero = new Personaje("Guerrero", 70, 35, ["Espada", "Escudo"], 30)

const Ninja = new Personaje("Ninja", 60, 25, ["Katana", "Kunai"], 70)


const Goblin = {
    nombre: "Goblin",
    hp: 25,
    ataque: 5,
    oro: 10
}
const Orco = {
    nombre: "Orco",
    hp: 70,
    ataque: 20,
    oro: 100
}


const seleccionardiv = document.getElementById ('Select')
const divlugares = document.getElementById ('Mover')

const boton0 = document.getElementById("0")
const boton1 = document.getElementById("1")
const boton2 = document.getElementById("2")
const botona = document.getElementById("a")
const botonb = document.getElementById("b")
const botonc = document.getElementById("c")
const imagen = document.getElementById("imagen")
const botonSalir = document.getElementById("Exit")

botonSalir.addEventListener ('click', (event) => {
    localStorage.clear
    window.location.reload()
})


function Lugares() {
    
    imagen.src = "Imagenes/Lugares.png"


    botona.innerText = "Cueva"
    botonb.innerText = "Taberna"
    botonc.innerText = "Bosque"

    const selectedPj = JSON.parse(localStorage.getItem("selected"))


    if (selectedPj.nombre == "Mago") {
        

        botona.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Mago0.png"

        })
        botonb.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Mago1.png"
        })
        botonc.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Mago2.png"

        })
        botona.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            divlugares.style.visibility = "hidden"
            imagen.src = "Imagenes/CuevaM.png"
        })

        botonb.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            divlugares.style.visibility = "hidden"
            imagen.src = "Imagenes/TavernaAll.png"
        })

        botonc.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            divlugares.style.visibility = "hidden"
            imagen.src = "Imagenes/BosqueM.png"
        })


    }

    else if (selectedPj.nombre == "Guerrero") {
        botona.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Guerrero0.png"

        })
        botonb.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Guerrero1.png"
        })
        botonc.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Guerrero2.png"
        })
        botona.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            divlugares.style.visibility = "hidden"
            imagen.src = "Imagenes/CuevaG.png"
        })

        botonb.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            divlugares.style.visibility = "hidden"
            imagen.src = "Imagenes/TavernaAll.png"
        })

        botonc.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            divlugares.style.visibility = "hidden"
            imagen.src = "Imagenes/BosqueG.png"
        })

    }

    else {
        botona.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Ninja0.png"

        })
        botonb.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Ninja1.png"
        })
        botonc.addEventListener('mouseover', (event) => {
            imagen.src = "Imagenes/Lugares-Ninja2.png"
        })
        botona.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            divlugares.style.visibility = "hidden"
            imagen.src = "Imagenes/CuevaN.png"
        })

        botonb.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            imagen.src = "Imagenes/TavernaAll.png"  
            divlugares.style.visibility = "hidden"

        })

        botonc.addEventListener('click', (event) => {
            const fin = document.createElement("p");
            fin.innerText = "Hasta aca llega este Simulador, Favor de aprobar esta entrega para continuar jugando ;)";
            document.body.appendChild(fin);
            divlugares.style.visibility = "hidden"
            imagen.src = "Imagenes/BosqueN.png"
        })

    }

}


function selecPersonaje() {
    imagen.src = "Imagenes/Mago.png"
    boton0.innerText = "MAGO"
    boton1.innerText = "GUERRERO"
    boton2.innerText = "NINJA"
    seleccionardiv.style.display = "grid"
    seleccionardiv.style.gridTemplateColumns = " repeat(3, 400px)"
    seleccionardiv.style.gridTemplateRows = "50 px"

    boton0.addEventListener('mouseover', (event) => {
        imagen.src = "Imagenes/Mago.png"
    })
    boton1.addEventListener('mouseover', (event) => {
        imagen.src = "Imagenes/Guerrero.png"
    })
    boton2.addEventListener('mouseover', (event) => {
        imagen.src = "Imagenes/Ninja.png"
    })

    boton0.addEventListener('click', (event) => {

        localStorage.setItem("selected", JSON.stringify(Mago))
        
        seleccionardiv.style.visibility = "hidden"
        divlugares.classList.remove('hidden')
        divlugares.style.display = "grid"
        divlugares.style.gridTemplateColumns = " repeat(3, 400px)"

        Lugares()

    })

    boton1.addEventListener('click', (event) => {
        localStorage.setItem("selected", JSON.stringify(Guerrero))
        seleccionardiv.style.visibility = "hidden"
        divlugares.classList.remove('hidden')
        divlugares.style.display = "grid"
        divlugares.style.gridTemplateColumns = " repeat(3, 400px)"

        Lugares()

    })

    boton2.addEventListener('click', (event) => {
        
        localStorage.setItem("selected", JSON.stringify(Ninja))
        seleccionardiv.style.visibility = "hidden"
        divlugares.classList.remove('hidden')
        divlugares.style.display = "grid"
        divlugares.style.gridTemplateColumns = " repeat(3, 400px)"
        

        Lugares()


    })
    
}


selecPersonaje()