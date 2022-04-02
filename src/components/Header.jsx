import React from 'react'
import {
  NavLink
} from "react-router-dom";

const Header = () => {
  return ( 

    <nav className="navbar navbar-dark bg-dark">
      <div className="container-md justify-content-end">
        {/* <NavLink className="navbar-brand" to="/">Inicio</NavLink> */}
        <NavLink className="navbar-brand" to="/volante">Volante</NavLink>
        <NavLink className="navbar-brand " to="/Inventario" >Inventario</NavLink>
        <NavLink className="navbar-brand " to="/registroVenta" >Registrar Venta</NavLink>
      </div>
    </nav>

   );
}
 
export default Header;