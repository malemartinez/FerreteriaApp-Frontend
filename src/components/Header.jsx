import React from 'react'
import {
  NavLink
} from "react-router-dom";

const Header = () => {
  return ( 

    <nav className="navbar navbar-dark bg-dark">
      <h1>FerreteriaApp</h1>
      <div className="container-md justify-content-end">
        {/* <NavLink className="navbar-brand" to="/">Inicio</NavLink> */}
        <NavLink className="navbar-brand" to="/admin/volante">Volante</NavLink>
        <NavLink className="navbar-brand " to="/admin/Inventario" >Inventario</NavLink>
        <NavLink className="navbar-brand " to="/admin/registroVenta" >Registrar Venta</NavLink>
      </div>
    </nav>

   );
}
 
export default Header;