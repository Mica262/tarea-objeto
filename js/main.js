class Mascota {
    constructor(nombre, edad, color, raza) {
        this.nombre = nombre
        this.edad = edad
        this.color = color
        this.raza = raza
    }
    presentación() {
        alert('Hola, soy ' + this.nombre + ' tengo ' + this.edad + ' añitos, soy de color ' + this.color + ' y mi raza es ' + this.raza)
    }
}


const Animal1 = new Mascota('Samira', 12, 'negra', 'caniche')
const Animal2 = new Mascota('Juana', 5, 'gris', 'tabby')
const Animal3 = new Mascota('Minerva', 4, 'blanca', 'pura perra')
const Animal4 = new Mascota('Odín', 3, 'marron con negro', 'tabby')
const Animal5 = new Mascota('Lagertha', 3, 'marron, negro y blanco', 'tabby')
const Animal6 = new Mascota('León', 2, 'gris amarronado', 'siamés')

console.log(Animal6)

Animal3.presentación()
