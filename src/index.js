import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const root = document.getElementById("root")

//const elemento = React.createElement(componente, propiedades, hijos)
//const elemento = React.createElement("h1", {className: "saludo"}, "Hola mundo")

//ReactDOM.render(<h1 className="saludos">Hola mundo</h1>, root);
ReactDOM.render(<App />, root);
