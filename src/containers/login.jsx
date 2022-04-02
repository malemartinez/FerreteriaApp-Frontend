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

    console.log( email, password);

    if(register){
      dispatch(registrarInfoUsuario(email,password))
    }else{
      dispatch(ingresoUsuario(email , password))

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        setError(true)
        setErrorMessage(errorMessage)
      });

    }

  
  }


  return ( 
    <div  className="row justify-content-center" >
      <div  className="col-12 col-sm-8 col-md-6 col-xl-4" >
      <h1 className="title" >{  register?"Registro" : "Inicio sesión"}</h1>
     <form onSubmit={getData} >
     {
          error ? (
              <div className="alert alert-danger">
                  {error}
              </div>
          ) : null
      }
         <div className="mb-3">
           <label htmlFor="email" className="form-label">Email address</label>
           <input type="email" className="form-control" id="email" />
            { error? (<p> Error: {errorMessage} </p>): (null)}
         </div>

         <div className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" className="form-control"  id='password'/>
         </div>
         
         <button type="submit" className="btn btn-lg btn-dark btn-block" >
           {register? "Registrar": "Ingresar" }
           </button>
     </form>
      </div>
      
    </div>

  );
}
 
export default Login;