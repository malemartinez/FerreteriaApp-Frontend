// constantes
const dataInicial = {
  registro: false,
  ingreso: false,
  user:null,
  loading: false,
  activo: false,

}

// types
const ActionTypes = {
  FIREBASE_REGISTER: "FIREBASE_REGISTER",
  FIREBASE_LOGIN: "FIREBASE_LOGIN",
  LOADING : 'LOADING',
  USER_EXITO : 'USER_EXITO',
  USER_ERROR : 'USER_ERROR',
  CERRAR_SESION : 'CERRAR_SESION'

  

}

// reducer
 function firebaseReducer(state = dataInicial, {type , payload }){
   switch (type) {
    case ActionTypes.FIREBASE_REGISTER :
      return {...state, registro: true}
    case ActionTypes.FIREBASE_LOGIN :
      return {...state, ingreso: false , registro: false}
    case ActionTypes.USER_EXITO:
      return {...state, user: payload}
    
    default:
      return {...state};

   }

}

// actions
 const registrarUsuario = () => {

  return {
    type: ActionTypes.FIREBASE_REGISTER,
    }

}
export const LoginUsuario = (usuario) => {

  return {
    type: ActionTypes.FIREBASE_LOGIN,
    payload: usuario
    }
}

export const setUser = ( usuario) => {
  return {
    type: ActionTypes.USER_EXITO,
    payload: usuario
    }
}

export { ActionTypes , firebaseReducer ,registrarUsuario }