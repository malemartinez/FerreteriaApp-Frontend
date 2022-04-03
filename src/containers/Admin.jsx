import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header"
import { Fragment } from 'react';




const Admin = () => {

  return ( 
    <Fragment>
      <Header />
      <h1>Bienvenido Admin</h1>
      <Outlet/>
    </Fragment>
   );
}
 
export default Admin;