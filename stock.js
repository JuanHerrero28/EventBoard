const productos = [
    {
        id: 1,
        nombre: "los pericos",
        lugar: "Estadio Obras",
        horario: "19 a 22hs",
        precio: 1200,
        img: 'img/moderat1.jpg',
        cantidad:1
    },
    {
        id: 2,
        nombre: "los pericos",
        lugar: "Estadio Obras",
        horario: "19 a 22hs",
        precio: 1200,
        img: 'img/caras.png',
        cantidad:1
    },
    {
        id: 3,
        nombre: "los pericos",
        lugar: "Estadio Obras",
        horario: "19 a 22hs",
        precio: 1200,
        img: 'img/moderat1.jpg',
        cantidad:1
    },
    {
        id: 4,
        nombre: "los pericos",
        lugar: "Estadio Obras",
        precio: 1200,
        horario: "19 a 22hs",
        img: 'img/moderat1.jpg',
        cantidad:1
    },
    {
        id: 5,
        nombre: "los pericos",
        lugar: "Estadio Obras",
        horario: "19 a 22hs",
        precio: 1200,
        img: 'img/moderat1.jpg',
        cantidad:1
    },
    {
        id: 6,
        nombre: "los pericos",
        lugar: "Estadio Obras",
        horario: "19 a 22hs",
        precio: 1200,
        img: 'img/moderat1.jpg',
        cantidad:1
    },
]

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
};

export {productos};