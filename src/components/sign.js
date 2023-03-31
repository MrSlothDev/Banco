export default function Sign (props) {
  return (
    <form action='sign.php' method='post' id='signform'>
      <p hidden>Usuario ocupado</p>
      <input type='text' name='usuario' placeholder='Usuario' required />

      <input
        type='password'
        placeholder='Contraseña'
        name='password'
        required
      />

      <button className='button' type='button' onClick={props.handleSesion}>
        Registrarse
      </button>
      <button className='salir' type='button' onClick={props.handleVolver}>
        Iniciar sesion
      </button>
    </form>
  )
}
