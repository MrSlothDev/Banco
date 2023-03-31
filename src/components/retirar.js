const Retirar = (props) => {
  return (
    <form action='' method='post' id='retirar'>
      <p hidden>No tiene suficiente</p>
      <input
        type='number'
        name='dinero'
        placeholder='Cantidad a retirar'
        required
      />
      <button className='button' type='submit' title='retirar' name='retirar'>
        Retirar
      </button>
      <button className='salir' onClick={props.handleVolver}>
        Volver
      </button>
    </form>
  )
}

export default Retirar
