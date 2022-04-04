import { getAuth } from "firebase/auth"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { docuRef } from "../firebase-config";
import { databaseCollection } from "../firebase-config";
import { db } from "../firebase-config";

// constantes
const dataInicial = {
  user:null,
  rol: null,
  activo: false,
  registro: false,
  ingresado: false,
  error: false,
  errorMessage: null

}

// types
export const ActionTypes = {
  REGISTER: "REGISTER",
  DESREGISTRAR : "DESREGISTRAR",
  FIREBASE_REGISTER: "FIREBASE_REGISTER",
  FIREBASE_LOGIN: "FIREBASE_LOGIN",
  SET_USER: "SET_USER",
  SET_ROL: "SET_ROL",

  LOADING : 'LOADING',
  USER_EXITO : 'USER_EXITO',
  USER_ERROR : 'USER_ERROR',
  DELETE_ERROR: "DELETE_ERROR",
  CERRAR_SESION : 'CERRAR_SESION'

  

}

// reducer
export function firebaseReducer(state = dataInicial, {type , payload }){
  switch(type){
    case ActionTypes.REGISTER:
        return {...state , registro:true , error: false , errorMessage: null}
    case ActionTypes.DESREGISTRAR:
      return {...state, registro: false}

    case ActionTypes.SET_USER:
        return {...state, user: payload}

    case ActionTypes.FIREBASE_REGISTER:
      return { ...state , rol:payload , ingresado: true }

    case ActionTypes.FIREBASE_LOGIN:
      return { ...state ,activo: true , rol: payload}
    
      case ActionTypes.SET_ROL:
        return { ...state , rol: payload }

    case ActionTypes.USER_ERROR:
        return {...dataInicial , error: true , errorMessage: payload }
    
    case ActionTypes.DELETE_ERROR:
      return { ...state, error:false , errorMessage: null  }

    case ActionTypes.USER_EXITO:
        return {...state, activo: true, user: payload}

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

export const desregistrar = ()=>{
  return{
    type: ActionTypes.DESREGISTRAR
  }
}

export const deleteError =()=>{
  return{
    type: ActionTypes.DELETE_ERROR
  }
}

export const setRol = (rol)=>{
  return{
    type: ActionTypes.SET_ROL,
    payload: rol
  }
}

export const setCloseSesion = ()=>{
  return{
    type: ActionTypes.CERRAR_SESION,
  }
}


const auth = getAuth();

export const  registrarInfoUsuario = (email,password, rol) => async(dispatch)=>{
  try {
      const dataUser = await createUserWithEmailAndPassword(auth, email, password)
        console.log(dataUser)
    
        //crear usuario en la base de datos
        console.log(dataUser.user.uid);
        const docuRef = doc(db, `usuario/${dataUser.user.uid}`);
        await setDoc(docuRef, { correo: email, rol: rol });
        await addDoc(databaseCollection, {correo: email, rol: rol})
    
      dispatch( {
        type: ActionTypes.FIREBASE_REGISTER,
        payload:rol
      })
    
  } catch (error) {
    console.log(error)
    dispatch ( {
      type: ActionTypes.USER_ERROR,
      payload: error.message
  
    })
  }
}

export const ingresoUsuario =  (email , password , rol) => async (dispatch) =>{

  try {
    await signInWithEmailAndPassword(auth, email, password)
    dispatch({
      type: ActionTypes.FIREBASE_LOGIN,
      payload:rol
    })
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    dispatch( {
      type: ActionTypes.USER_ERROR,
      payload: error.message
  
    })
  }
}

