const Ingresar = (props) => {
  return (
    <form action='' method='post' id='retirar'>
      <p hidden>No tiene suficiente</p>
      <input
        type='number'
        name='dinero'
        placeholder='Cantidad a ingresar'
        required
      />
      <button className='button' type='submit' title='ingresar' name='ingresar'>
        Ingresar
      </button>
      <button className='salir' onClick={props.handleVolver}>
        Volver
      </button>
    </form>
  )
}

export default Ingresar
