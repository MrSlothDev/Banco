export default function Login (props) {
  return (
    <form action='sesion.html' method='post' id='loginform'>
      <p hidden>Usuario o contraña incorrectos</p>
      <input type='text' name='usuario' placeholder='Usuario' required />

      <input
        type='password'
        placeholder='Contraseña'
        name='password'
        required
      />

      <button className='button' type='button' onClick={props.handleSesion}>
        Login
      </button>
      <button className='salir' onClick={props.handleVolver}>
        Registrarse
      </button>
    </form>
  )
}
