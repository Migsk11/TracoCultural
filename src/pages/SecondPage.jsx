import React from 'react'
import { useNavigate } from 'react-router-dom'
import '/workspaces/TracoCultural/src/CSS/SecondPage.css'

function SecondPage() {


  return (
    <body>

          <div className="square">
            

            <div className="square_content">

              <input 
              id='inputEmail'
              onFocus={onFocusInputEmail}
              type="email" 
              placeholder='E-Mail' 
              className="input_email" 
              /> 

            </div>
            
            
          </div>
        


    </body>
  )
}

function onFocusInputEmail(){

  document.getElementById('inputEmail').style.borderRadius = '50px'

}

export default SecondPage