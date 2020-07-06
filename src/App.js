import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/styles.scss'
import Curso from './Curso';
import logo from './antawara.png'

const cursos = [
  {
    "title": "JavaScript desde cero",
    "image": "https://images.unsplash.com/photo-1515248027005-c33283ec3fba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "price": 20,
    "profesor": "Andres Bustamante"
  },
  {
    "title": "Lectura Veloz",
    "image": "https://mensvenilia.com/wp-content/uploads/2015/11/speed-reading-barcelona.png",
    "price": 15,
    "profesor": "Jose Bustamante"
  },
  {
    "title": "Trucos Matematicos",
    "image": "https://i.pinimg.com/originals/2c/70/93/2c7093afb7802785d8582c42d11aca81.png",
    "price": 20,
    "profesor": "Vladimir Da Silva"
  },
  {
    "title": "Lectura Comprensiva",
    "image": "https://blog.educalive.com/wp-content/uploads/2020/02/Mejorar-Comprension-Lectora-1024x536.jpg",
    "price": 10,
    "profesor": "Alberto Medrano"
  }
]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://images.unsplash.com/photo-1515248027005-c33283ec3fba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p> Tu futuro te esta esperando</p>
            <a href="https://ed.team" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {
        cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/> )
      }
      
      
    </div>
  </>
)
export default App;
