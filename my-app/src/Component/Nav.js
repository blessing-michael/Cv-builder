
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import React from 'react'

function Nav() {
  return (
    <div>
         <nav id="nav" >
           <h1 id='title'><span id='icon'><FontAwesomeIcon icon="fa-solid fa-newspaper" /></span>CV builder </h1> 

           <ul id='contact'>
            <li><a href="https://github.com/blessing-michael?tab=repositories">Github</a></li>
            <li> <a href="https://www.linkedin.com/in/blessing-asuquo-4509981a2/">LinkedIn</a></li>
            
            </ul>  

          
         </nav>
         
           
    </div>
  )
}

export default Nav