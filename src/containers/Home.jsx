import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { registrarUsuario ,LoginUsuario, setUser } from '../redux/registroDuck';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from '@firebase/util';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { GithubAuthProvider } from "firebase/auth";

const Home = () => {

  const googleProvider = new GoogleAuthProvider();
  const GitHubprovider = new GithubAuthProvider();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const auth = getAuth();

  const SignInGoogle = async() => {
    await signInWithPopup(auth, googleProvider)
    .then(async (result) => {  
      await setDoc(doc(db, "usuariosGoogle", "google"), {
        email: result.user.email,
        uid: result.user.uid,
      });
      dispatch(setUser(result.user))
      navigate("/Logged");
    }).catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }

  const signInWithGitHub = async ()=>{
    
    await signInWithPopup(auth, GitHubprovider)
    .then(async (result) => {
      await setDoc(doc(db, "usuariosGit", "Github"), {
        email: result.user.email,
        uid: result.user.uid,
      });
      dispatch(setUser(result.user))
      navigate("/Logged")
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;

    });
  }




  const withOutAccount =()=>{
    dispatch(registrarUsuario())
    navigate("/login")

  }
  const withAccount =() =>{
    navigate("/login")
  }


  return ( 

    <>
    
    <div className='row justify-content-center'>
      <div className='col-12 col-sm-8 col-md-6 col-xl-4 d-flex flex-column'>
      <h1 className='title-h1'>Bienvenido</h1>
      <div className='links-container d-flex mb-3'>

        <div className='flex-fill d-flex flex-column me-2'>
          <p className='text-center'>Ya tengo cuenta</p>
          <button type="button" className="btn btn-warning"
            onClick={ ()=> withAccount() }
          >
            Ingresar
          </button>

        </div>
        <div className='flex-fill d-flex flex-column ms-2'>
          <p className='text-center'>No tengo cuenta</p>
          <button type="button" className="btn btn-warning"
            onClick={ ()=> withOutAccount() }
          >
            Registrarme
          </button>
          
        </div>
      </div>

      <button type="button" className="btn btn-primary mb-2" onClick={SignInGoogle}>
        <i className="fa-brands fa-google me-2"></i>
        Ingresar con google
      </button>
      <button type="button" className="btn btn-primary " onClick={signInWithGitHub}  >
        <i className="fa-brands fa-github me-2"></i>
        Ingresar con Github
      </button>

    </div>
    </div>
    
    </>
    
    
   );
}
 
export default Home;