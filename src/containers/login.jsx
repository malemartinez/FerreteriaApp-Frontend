import React, { useState } from 'react';
import app from '../firebase-config'
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { registrarInfoUsuario ,ingresoUsuario } from '../redux/registroDuck';

const auth = getAuth(app);

const Login = () => {

  const register = useSelector(state => state.firebaseAuth.registro)

  const dispatch = useDispatch();

  const [ error  , setError] = useState(false)
  const [ errorMessage  , setErrorMessage] = useState("")

  const getData=(e)=>{
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log( email, password);

    if(register){
      dispatch(registrarInfoUsuario(email,password , rol))
    }else{
      dispatch(ingresoUsuario(email , password))
    }
  }

  //validaciones de los que ingresa el usuario antes de enviar la data
  


  return ( 
    <div  className="row justify-content-center" >
      <div  className="col-12 col-sm-8 col-md-6 col-xl-4" >
      <h1 className="title" >{  register?"Registro" : "Inicio sesión"}</h1>
     <form onSubmit={getData} >
     {
          error ? (
              <div className="alert alert-danger">
                  {errorMessage}
              </div>
          ) : null
      }
         <div className="mb-3">
           <label htmlFor="email" className="form-label">Email address</label>
           <input type="email" 
                  className="form-control" 
                  id="email"
                  placeholder="Ingrese Email"

             />
            
         </div>

         <div className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" 
                  className="form-control"  
                  id='password'
                  placeholder="Ingrese Contraseña"

                  />
         </div>

         <div className='mb-3 d-flex flex-column'>

          {/* <label htmlFor="rol">Rol:</label> */}
            <select id="rol" className='p-1 flex-fill mb-3'>
              <option value="admin">Administrador</option>
              <option value="user">Usuario</option>
            </select>
            <button type="submit" className="btn btn-lg btn-dark btn-block flex-fill" >
              {register? "Registrar": "Ingresar" }
              </button>
         </div>

         
     </form>
      </div>
      
    </div>

  );
}
 
export default Login;