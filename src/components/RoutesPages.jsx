import React from 'react'
import {
  Routes,
  Route,

} from "react-router-dom";
import Home from '../containers/Home';
import Login from '../containers/login';
import Volante from './Volante';
import Logged from '../containers/Logged';


const RoutesPages = () => {
  return ( 
    <Routes>
            
            <Route path= "/login" element = {<Login /> } />
            <Route path= "/logged" element = {<Logged /> } />
            {/* <Route path= "/registrar" element = {<Login /> } /> */}
            <Route path= "/regristroVenta" /* element = {<CharacterList /> } */ />
            <Route path= "/Inventario" /* element = { <EpisodeListing />} *//>
            <Route path='/Volante' element = {<Volante/> }/>
            <Route path='/' element = {<Home />}/>
            {/* <Route path="*" element={"No encontrada"} /> */}
    </Routes>
   );
}
 
export default RoutesPages;