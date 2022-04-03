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
    <div className="">
      <nav className="navbar bg-warning container-fluid p-3 mb-5">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 ">FerreteriaApp</span>
      </div>
    </nav>
      <Router>
        <div className="container-sm">
          {/* <Header /> */}
          <RoutesPages />
        </div>
      </Router>

    </div>
  );
}

export default App;
