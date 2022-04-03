// constantes
const dataInicial = {
  productos: []

}

// types
export const ActionTypes = {

  SET_PRODUCTOS: "SET_PRODUCTOS",
}

// reducer
export function inventarioReducer(state = dataInicial, {type , payload }){
  switch(type){
    case ActionTypes.SET_PRODUCTOS:
        return {...state, productos: payload}
    case ActionTypes.DESREGISTRAR:
      return {}


    default: 
        return state;
      
      }

}

// actions

export const setProductos = ( productos) => {
  return {
    type: ActionTypes.SET_PRODUCTOS,
    payload: productos
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


// const auth = getAuth();

// export const  registrarInfoUsuario = (email,password, rol) => async(dispatch)=>{
//   try {
//       const dataUser = await createUserWithEmailAndPassword(auth, email, password)
//         console.log(dataUser)
    
//         //crear usuario en la base de datos
//         console.log(dataUser.user.uid);
//         const docuRef = doc(db, `usuario/${dataUser.user.uid}`);
//         await setDoc(docuRef, { correo: email, rol: rol });
//         await addDoc(databaseCollection, {correo: email, rol: rol})
    
//       dispatch( {
//         type: ActionTypes.FIREBASE_REGISTER,
//         payload:rol
//       })
    
//   } catch (error) {
//     console.log(error)
//     dispatch ( {
//       type: ActionTypes.USER_ERROR,
//       payload: error.message
  
//     })
//   }
// }

// export const ingresoUsuario =  (email , password , rol) => async (dispatch) =>{

//   try {
//     await signInWithEmailAndPassword(auth, email, password)
//     dispatch({
//       type: ActionTypes.FIREBASE_LOGIN,
//       payload:rol
//     })
//   } catch (error) {
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     dispatch( {
//       type: ActionTypes.USER_ERROR,
//       payload: error.message
  
//     })
//   }
// }