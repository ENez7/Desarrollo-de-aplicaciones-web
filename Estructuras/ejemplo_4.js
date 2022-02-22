let rol = 'ADMIN'

if (rol === 'ADMIN')
    console.log('El usuario tiene control total')
else if (rol === 'EDITOR')
    console.log('El usuario solo puede editar sus registros')
else
    console.log('El usuario es visitante')

if (rol === 'ADMIN')
    console.log('El usuario tiene control total')
else if (rol === 'EDITOR')
    console.log('El usuario solo puede editar sus registros')
else if (rol === 'AUTOR')
    console.log('El usuario solo puede registrar usuarios')
else
    console.log('El usuario es visitante')