import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
/* import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js' */
/* Importar boostrap */
/* import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";  */
import "mdb-ui-kit/css/mdb.min.css"
import "mdb-ui-kit/js/mdb.min.js"
import Principal from './Principal';
import Header from './components/Header';
import Acceder from './acceder';
import Pruebas from './Pruebas';


const MiaTecnoApp = ()=>{

  return(
    <>
      <Header/>
      <Router>
        <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/Acceder" element={<Acceder/>}/>
            <Route path="/pruebas" element={<Pruebas/>} />
        </Routes>
      </Router>
    </>

  );

}

ReactDOM.render( <MiaTecnoApp/>,document.getElementById('root'));
