import React from 'react'
import {
  Routes,
  Route,

} from "react-router-dom";
import Home from '../containers/Home';
import Login from '../containers/login';
import Volante from './Volante';


const RoutesPages = () => {
  return ( 
    <Routes>
            
            <Route path= "/loginUsuario" element = {<Login /> } />
            <Route path= "/registrar" element = {<Login /> } />
            <Route path= "/regristroVenta" /* element = {<CharacterList /> } */ />
            <Route path= "/Inventario" /* element = { <EpisodeListing />} *//>
            <Route path='/Volante' element = {<Volante/> }/>
            <Route path='/' element = {<Home />}/>
            {/* <Route path="*" element={"No encontrada"} /> */}
    </Routes>
   );
}
 
export default RoutesPages;