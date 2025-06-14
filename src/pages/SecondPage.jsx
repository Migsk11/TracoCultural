import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function SecondPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); // Redireciona para a página inicial (rota raiz)
  }

  return (
    <div>

      <button onClick={handleButtonClick}>
        Volte para pagina anterior
      </button>

    </div>
  )
}

export default SecondPage