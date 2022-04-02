import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registrarUsuario ,LoginUsuario } from '../redux/registroDuck';

const Home = () => {

  const dispatch = useDispatch();


  return ( 
    <div className='d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column'>
      <h1>Bienvenido</h1>
      <div className='d-flex'>
        <div>
          <p>Ya tengo cuenta</p>
          <Link to="/loginUsuario">Ingresar</Link>
        </div>
        <div>
          <p>No tengo cuenta</p>
          <Link to="/registrar" onClick={ ()=> dispatch(registrarUsuario()) } >Registrarme</Link>
        </div>
        <div></div>
      </div>
    </div>
    </div>
    
   );
}
 
export default Home;