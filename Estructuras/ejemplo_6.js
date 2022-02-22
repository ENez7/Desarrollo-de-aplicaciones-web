const usuario = false;
const puedePagar = true;

if(usuario && puedePagar)
    console.log('Pedido realizado con exito')
else
    console.log('Error en el pago')


if(usuario && puedePagar)
    console.log('Pedido realizado con exito')
else if(!usuario)
    console.log('Inicia sesion para realizar el pedido')
else if(!puedePagar)
    console.log('Fondos insuficientes')
else
    console.log('Hubo un error con tu pago')