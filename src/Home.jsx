import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import SecondPage from './pages/SecondPage'

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/segunda-pagina');
  };

  return (
    <body className="body_principal">
      <div className='div_principal'>
        <div className="div_img_cristoRedentor">
          <img className="transform_redentor" src="src/assets/CristoRedentor.png" alt="" />
        </div>

        <div className="text_Eai">
          <img className="img_eai" src="src/assets/TextoEaiParaOndeVamos.png" alt="" />
        </div>

        <div>
          <button className="Button_EntrarOuCadastrar" onClick={handleButtonClick}>
            Vamos descobrir!
          </button>
        </div>
      </div>
    </body>
  )
}

function Home() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/segunda-pagina" element={<SecondPage />} />
    </Routes>
  )
}

export default Home