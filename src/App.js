import Photo from './componentes/imagenes/ejemplo.jpg'
import './App.css';
import Encabezado from './componentes/encabezado';
import Carrusel from './componentes/carrusel1/carrusel1';
import Carrusel2 from './componentes/carrusel1/carrusel2';
import {useState} from 'react'

function App() {

  const [initialState,setInitialState]= useState();

    const listaCarrusel = [
      { 
        id:0,
        name:"ejemplo3.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:1,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:2,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:3,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:4,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:5,
        name:"ejemplo2.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:6,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:7,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:8,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:9,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:10,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      },
      {
        id:11,
        name:"ejemplo.jpg",
        origen:"../imagenes/ejemplo.jpg",
        description:"Action,2016",
        title:"Den of Thieves"
      }
    ]
  return (
    <div className="App">
      <Encabezado />

      <div className="container-carrusel">
        <div className='navegacion'>
          <nav>
            <a href='#' className='nav-enlace'>Today  /</a>
            <a href='#' className='nav-enlace'>This Week  /</a>
            <a href='#' className='nav-enlace'>Last 30 days  </a>
          </nav>
          </div>
        <Carrusel
          imagenes={listaCarrusel} 
        />
        <div className="menu-carrusel"> 

          <div className='movies'>
          <p>Action and <br/>
              drama movies</p>
          </div>
        </div>
      </div>
      <div className="container-carrusel2">

      <div className="menu-carrusel"> 

      <div className='movies'>
      <p>Funniest comedy <br/>
        Movies of 2018</p>
      </div>
      </div>
      <div className='slider2'>
          <div className='navegacion2'>
          <nav>
            <a href='#' className='nav-enlace2'>Today  /</a>
            <a href='#' className='nav-enlace2'>This Week  /</a>
            <a href='#' className='nav-enlace2'>Last 30 days  </a>
          </nav>
          </div>
      
        
        <Carrusel2
          imagenes={listaCarrusel} 
        />
      </div>
      </div>



    </div>
  );
}

export default App;
