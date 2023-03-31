import './style.css'
import Sign from './components/sign'
import Login from './components/login'
import Retirar from './components/retirar'
import Ingresar from './components/ingresar'
import Saldo from './components/saldo'
import Sesion from './components/sesion'
import React, { useState } from 'react'

function App () {
  const [pagina, setPagina] = useState(2)
  // Dependiendo de la pagina, muestra tal pagina
  const Estado = () => {
    switch (pagina) {
      case 1:
        return (
          <Sign
            handleSesion={() => irAPagina(6)}
            handleVolver={() => irAPagina(2)}
          />
        )

      case 2:
        return (
          <Login
            handleSesion={() => irAPagina(6)}
            handleVolver={() => irAPagina(1)}
          />
        )

      case 3:
        return <Saldo handleVolver={() => irAPagina(6)} />

      case 4:
        return <Retirar handleVolver={() => irAPagina(6)} />

      case 5:
        return <Ingresar handleVolver={() => irAPagina(6)} />

      case 6:
        return (
          <Sesion
            handleSaldo={() => irAPagina(3)}
            handleIngresar={() => irAPagina(5)}
            handleRetirar={() => irAPagina(4)}
            handleVolver={() => irAPagina(2)}
          />
        )

      default:
        return (
          <Sesion
            handleSaldo={() => irAPagina(3)}
            handleIngresar={() => irAPagina(5)}
            handleRetirar={() => irAPagina(4)}
            handleVolver={() => irAPagina(2)}
          />
        )
    }
  }
  // Pagina iniciada por defecto
  // const [pagina, setPagina] = useState(2)

  // Funcion para moverse entre paginas
  const irAPagina = (num) => {
    setPagina(num)
  }

  // Render()
  return (
    <div className='App'>
      {/* Estado muestra la pagina */}
      <Estado />
    </div>
  )
}

export default App
