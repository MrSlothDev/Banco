const Saldo = (props) => {
  return (
    <form action='sign.php' method='post' id='signform'>
      <p>Su sueldo es de 400$</p>
      <button className='salir' type='button' onClick={props.handleVolver}>
        Volver
      </button>
    </form>
  )
}

export default Saldo
