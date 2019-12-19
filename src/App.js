import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Form1 from './components/Form1'
import DatatablePage from './components/DatatablePage '
import {BrowserRouter, Route} from "react-router-dom";
import Form2 from './components/Form2';
import Carousel from './components/Carousel';


const App=()=>{
  return (
    <div className="App">
      

      <BrowserRouter>

       <Route  exact path ="/" component={Home}/>
        <Route path ="/form1" component={Form1}/>
        <Route path ="/form2"component={Form2}/>
       
     </BrowserRouter>   


    </div>
  );
}

export default App;
