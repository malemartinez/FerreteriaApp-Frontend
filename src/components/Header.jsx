import React from 'react'
import {
  Link
} from "react-router-dom";

const Header = () => {
  return ( 

    <nav className="navbar navbar-dark bg-dark">
      <div className="container-md justify-content-end">
        <Link className="navbar-brand" to="/">Inicio</Link>
        <Link className="navbar-brand" to="/volante">Volante</Link>
        <Link className="navbar-brand " to="/Inventario" >Inventario</Link>
        <Link className="navbar-brand " to="/registroVenta" >Registrar Venta</Link>
      </div>
    </nav>

   );
}
 
export default Header;