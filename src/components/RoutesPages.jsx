import React from 'react'
import {
  Routes,
  Route,

} from "react-router-dom";
import Home from '../containers/Home';
import Login from '../containers/login';

import Logged from '../containers/Logged';
import Admin from '../containers/Admin';
import Volante from './Volante';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Inventario from './Inventario';



const RoutesPages = () => {

  const rol = useSelector(state => state.firebaseAuth.rol)

  return ( 
    <Routes>
          <Route path='/admin' element={ rol == "admin" ? (<Admin/>): (<Navigate to="/"/>) }>
              <Route path= "registroVenta" element = {"registro" }/>
              <Route path= "Inventario" element = { <Inventario/>}/> 
              <Route path='volante' element = {<Volante/> }/> 
          </Route>
          <Route exact path= "/logged" element = {<Logged /> } />
          <Route exact path= "/login" element = {<Login /> } />
          <Route exact path='/' element = {<Home />}/>
          
            {/* <Route path="*" element={"No encontrada"} /> */}
    </Routes>
   );
}
 
export default RoutesPages;