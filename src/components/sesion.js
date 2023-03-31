const Sesion = (props) => {
  return (
    <form action='' method='post' id='sesion'>
      <button className='button' onClick={props.handleSaldo}>
        Ver saldo
      </button>
      <button className='button' onClick={props.handleIngresar}>
        Ingresar dinero
      </button>
      <button className='button' onClick={props.handleRetirar}>
        Retirar dinero
      </button>
      <button className='salir' onClick={props.handleVolver}>
        Cerrar sesion
      </button>
    </form>
  )
}

export default Sesion
