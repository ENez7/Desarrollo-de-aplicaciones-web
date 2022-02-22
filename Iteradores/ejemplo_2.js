for(let i=0; i<=10; i++){
    if(i===5){
        console.log('Estamos en 5... FIN')
        break
    }
    console.log(`Numero ${i}`)
}

for(let i=0; i<=10; i++){
    if(i===5){
        console.log('Estamos en 5... FIN')
        continue
    }
    console.log(`Numero ${i}`)
}

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'TV 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50, descuento: true},
    {nombre: 'Celular', precio: 500},
]

for(let i=0; i<=10; i++){
    if(carrito[i].descuento){
        console.log(`Articulo ${carrito[i].nombre} tiene descuento`)
        continue
    }
    console.log(carrito[i].nombre)
}
