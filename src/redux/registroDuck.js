import { getAuth } from "firebase/auth"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { docuRef } from "../firebase-config";
import { databaseCollection } from "../firebase-config";

// constantes
const dataInicial = {
  user:null,
  loading: false,
  activo: false,
  registro: false,
  error: false,
  errorMessage: null

}

// types
export const ActionTypes = {
  REGISTER: "REGISTER",
  FIREBASE_REGISTER: "FIREBASE_REGISTER",
  FIREBASE_LOGIN: "FIREBASE_LOGIN",
  SET_USER: "SET_USER",

  LOADING : 'LOADING',
  USER_EXITO : 'USER_EXITO',
  USER_ERROR : 'USER_ERROR',
  CERRAR_SESION : 'CERRAR_SESION'

  

}

// reducer
export function firebaseReducer(state = dataInicial, {type , payload }){
  switch(type){
    case ActionTypes.REGISTER:
        return {...state , registro:true}

    case ActionTypes.SET_USER:
        return {...state, user: payload}

    case ActionTypes.FIREBASE_REGISTER:
      return { ...state}

    case ActionTypes.FIREBASE_LOGIN:
      return { ...state ,activo: true }
    case ActionTypes.LOADING:
        return {...state, loading: true}

    case ActionTypes.USER_ERROR:
        return {...dataInicial , error: true , errorMessage: payload }

    case ActionTypes.USER_EXITO:
        return {...state, loading: false, activo: true, user: payload}

    case ActionTypes.CERRAR_SESION:
        return {...dataInicial}
    default: 
        return state;
      
      }

}

// actions

export const setUser = ( usuario) => {
  return {
    type: ActionTypes.SET_USER,
    payload: usuario
    }
}

export const registrarUsuario = ()=>{
  return {
    type: ActionTypes.REGISTER
  }
}


const auth = getAuth();

export const  registrarInfoUsuario = (email,password, rol) => async(dispatch)=>{
  try {
      const dataUser = await createUserWithEmailAndPassword(auth, email, password)
        console.log(dataUser)
    
        //crear usuario en la base de datos
        console.log(dataUser.user.uid);
        // await setDoc(docuRef, { correo: email, rol: rol });
        await addDoc(databaseCollection, {correo: email, rol: rol})
    
      dispatch( {
        type: ActionTypes.FIREBASE_REGISTER,
    
      })
    
  } catch (error) {
    return {
      type: ActionTypes.USER_ERROR,
      payload: error
  
    }
  }
}

export const ingresoUsuario =  (email , password) => async (dispatch) =>{

  try {
    await signInWithEmailAndPassword(auth, email, password)
    dispatch({
      type: ActionTypes.FIREBASE_LOGIN,
  
    })
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    dispatch( {
      type: ActionTypes.USER_ERROR,
      payload: error
  
    })
  }

  
}