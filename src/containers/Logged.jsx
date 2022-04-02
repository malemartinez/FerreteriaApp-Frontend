import React, { useEffect, useState } from 'react'
import { docuRef } from '../firebase-config';
import { getDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import Admin from './Admin';
import User from './User';

const Logged = () => {
  const userFirebase = useSelector(state => state.firebaseAuth.user)

  const [user, setUser] = useState(null);

  async function getRolfromFirebase() {
    // const docuRef = doc(firestore, `usuarios/${uid}`);
    const document = await getDoc(docuRef);
    const infoUser = document.data();
    return infoUser;
  }

  useEffect(()=>{
    const setUserRol = ()=> {
      getRolfromFirebase().then((data) => {
        setUser(data);
      });
    }
    setUserRol();

  }, [userFirebase])





  return ( 
    <>
        {
          (user == null) ?
          (<div>...Cargando Data</div>):
          
          ( <div>
              {
                (user.rol == "admin")?(
                  <Admin />
                ):
                 (<User/>)
              }
          </div> )
        }
    </>
    
   );
}
 
export default Logged;