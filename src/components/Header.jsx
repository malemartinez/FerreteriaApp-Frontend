import React from 'react'
import { signOut , getAuth } from 'firebase/auth';
import app from '../firebase-config';
import { useDispatch } from 'react-redux';
import {
  NavLink, useNavigate
} from "react-router-dom";
import { setCloseSesion } from '../redux/registroDuck';

const auth = getAuth(app);
const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOut = () => {
    signOut(auth);
    dispatch(setCloseSesion());
    navigate("/")
}
  return ( 

    <nav className="navbar navbar-dark bg-warning">
      <div className="container-lg justify-content-end">
        {/* <NavLink className="navbar-brand" to="/">Inicio</NavLink> */}
        <NavLink className="navbar-brand" to="/admin/volante">Volante</NavLink>
        <NavLink className="navbar-brand " to="/admin/Inventario" >Inventario</NavLink>
        <NavLink className="navbar-brand " to="/admin/registroVenta" >Registrar Venta</NavLink>
        <button  className= "navbar-brand btn btn-md btn-warning" onClick={() => LogOut()}>Cerrar sesión</button>
      </div>
    </nav>

   );
}
 
export default Header;