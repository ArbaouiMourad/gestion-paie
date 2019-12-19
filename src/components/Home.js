import React from 'react'
import {Link} from "react-router-dom"
import Carousel from './Carousel'

function Home() {
    return (
   
<nav >
  <ul>
    <Link to ='/form1'>
    <li>Employeur</li>
    </Link>
    <Link to ='/form2'>
    <li>Employé</li>
    </Link>
    <li>services</li>
    <li>contact</li>
   
  </ul>
  
</nav>

  

    )
}

export default Home
