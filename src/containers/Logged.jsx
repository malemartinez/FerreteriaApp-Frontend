import React, { useEffect, useState } from 'react'
import { getDoc ,doc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import Admin from './Admin';
import User from './User';
import { setRol } from '../redux/registroDuck';
import { db } from '../firebase-config';
import { Navigate } from 'react-router-dom';

const Logged = () => {
  const userFirebase = useSelector(state => state.firebaseAuth.user)
  const rol = useSelector(state => state.firebaseAuth.rol)
  const dispatch = useDispatch();

  // async function getRolfromFirebase(uid) {
  //   const docuRef = doc(db, `usuario/${uid}`);
  //   const document = await getDoc(docuRef);
  //   const infoUser = document.data();
  //   return infoUser;
  // }

    // useEffect(()=>{
    //   const setUserRol = async (user)=> {
    //     const data = await getRolfromFirebase(user.uid)
    //     // dispatch(setRol(data.rol))
    //     setUser(data);
    //     console.log(data)
        
    //   }
    //   setUserRol(userFirebase);

    //  }, [])
    
  return ( 
    <>
        {
          (userFirebase == null) ?
          (<div>...Cargando Data</div>):
          
          ( <div>
              {
                (rol == "admin")?(
                  <Admin />
                ):
                 (
                   rol? (<User />): (<Navigate to= "/"/>)
                 )
              }
          </div> )
        }
    </>
    
   );
}
 
export default Logged;