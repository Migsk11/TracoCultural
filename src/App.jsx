import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <body class="body_principal">

    <div className='div_principal'>

        <div class="div_img_cristoRedentor"> {/* div da imagem do Cristo Redentor */}

          <img class="transform_redentor"src="src/assets/CristoRedentor.png" alt="" />

        </div>


        <div class="text_Eai"> {/* div texto principal "Eai para onde vamos..." */}

          <img class="img_eai" src="src/assets/TextoEaiParaOndeVamos.png" alt="" />
          
        </div>


        <div> {/* div do botão de Entrar ou Cadastrar*/}

          <button class="Button_EntrarOuCadastrar">

          Vamos descobrir!

          </button>

        </div>

    </div>








      </body>
    </>
  )
}

export default App

