const autentificado = false
const pagar = false

console.log(autentificado ? 'Si esta autenticado' : 'No esta autenticado')

console.log(autentificado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado')

console.log(autentificado ? pagar ? 'Si puede pagar' : 'Autenticado sin pago' : 'No esta autenticado')