import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import Header from './components/Header';
import RoutesPages from './components/RoutesPages';

import Volante from './components/Volante';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import  app  from './firebase-config';
import { useDispatch ,useSelector } from 'react-redux';
import { setUser } from './redux/registroDuck';


const auth = getAuth(app);
const firestore = getFirestore(app);


function App() {

  const user = useSelector(state => state.firebaseAuth.user)

  const dispatch = useDispatch();

    // Firebase

    React.useEffect(() => {
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
      fetchUser()
  }, [])
 


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
