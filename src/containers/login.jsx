import React from 'react';
import {db, auth} from '../firebase-config'
import { useSelector } from 'react-redux';


const Login = () => {
  const register = useSelector(state => state.firebaseAuth.registro)
  const Login = useSelector(state => state.firebaseAuth.ingreso)

  const getData=(e)=>{
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    console.log( email, password);
  }


  return ( 
    <div>
      <h1 className="title" >{ Login ? "Registro" : "Inicio sesión"}</h1>
     <form onSubmit={getData} >
         <div className="mb-3">
           <label htmlFor="" className="form-label">Email address</label>
           <input type="email" className="form-control" id="email" />
          
         </div>
         <div className="mb-3">
           <label htmlFor="" className="form-label">Password</label>
           <input type="password" className="form-control"  id='password'/>
         </div>
         
         <button type="submit" className="btn btn-primary" >
           { register? "Registrarme" : "Ingresar" }
           </button>
     </form>
    </div>

  );
}
 
export default Login;