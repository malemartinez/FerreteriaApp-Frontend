import { getAuth } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth"

// constantes
const dataInicial = {
  user:null,
  loading: false,
  activo: false,
  registro: false

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
    case ActionTypes.LOADING:
        return {...state, loading: true}

    case ActionTypes.USER_ERROR:
        return {...dataInicial}

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

export const  registrarInfoUsuario = async(email,password)=>{

  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    return {
      type: ActionTypes.FIREBASE_REGISTER,

    }
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });

  
}