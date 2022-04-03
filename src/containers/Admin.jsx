import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header"



const Admin = ({props}) => {
  return ( 
    <div>
      <Header />
      <h1>Bienvenido Admin</h1>
      <Outlet/>
    </div>
   );
}
 
export default Admin;