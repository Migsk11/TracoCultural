import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <body class="body_principal">
        


        <div class="div_img_cristoRedentor"> {/* div da imagem do Cristo Redentor */}

          <img src="src/assets/CristoRedentor.png" alt="" />

        </div>





        <div class="text_Eai"> {/* div texto principal "Eai para onde vamos..." */}

          <img class="img_eai" src="src/assets/TextoEaiParaOndeVamos.png" alt="" />
          
        </div>






        <div class="div_logo_inicial"> {/* div da imagem-logo */}

          <img class="img_logo_inicial" src="src/assets/LogoTracoCultural.png" alt="" />

        </div>







        <div> {/* div do botão de Entrar ou Cadastrar*/}

          <div>      
          
            <h1 class="EntrarOuCadastra">Entrar ou Cadastrar</h1>

          </div>

          <div class="botton_entrar_cadastrar"></div>

        </div>








      </body>
    </>
  )
}

export default App

