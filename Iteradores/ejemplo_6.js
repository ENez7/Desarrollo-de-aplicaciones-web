let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS']

pendientes.forEach((pendiente, index) => {
    console.log(`${index}: ${pendiente}`)
})

const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'},
]

carrito.forEach( producto => {
    console.log(`Agregado ${producto}`)
})

