import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import RoutesPages from './components/RoutesPages';

import { onAuthStateChanged, getAuth } from "firebase/auth";
import  app  from './firebase-config';
import { useDispatch ,useSelector } from 'react-redux';
import { setUser } from './redux/registroDuck';


const auth = getAuth(app);


function App() {

  const dispatch = useDispatch();

    // Firebase

 useEffect(()=>{
   const fetchUser = () => {
     onAuthStateChanged(auth , user => {
         console.log(user)
         if(user){
             dispatch(setUser(user))
             
         }else{
             dispatch(setUser(null))
         }
     })
   } 
   fetchUser();

 } , [])
  
 


  return (
    <div className="container-fluid  mt-2">
      <Router>
        <div className="container-fluid  mt-2">
          {/* <Header /> */}
          
          <RoutesPages />
        </div>
      </Router>

    </div>
  );
}

export default App;
