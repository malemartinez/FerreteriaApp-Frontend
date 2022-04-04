// constantes
const dataInicial = {
  productos: [],
  totalInventario: 0,
  error: null,
  errorMessage: null

}

// types
export const ActionTypes = {

  SET_PRODUCTOS: "SET_PRODUCTOS",
  INVENTARIO_ERROR: "INVENTARIO_ERROR",
  SUM_INVENTARIO: "SUM_INVENTARIO",
  AGREGAR_PRODUCTO: "AGREGAR_PRODUCTO",
}

// reducer
export function inventarioReducer(state = dataInicial, {type , payload }){

  switch(type){
    case ActionTypes.SET_PRODUCTOS:
      return {...state, productos: payload}

    case ActionTypes.INVENTARIO_ERROR:
      return {...state, error: true , errorMessage: payload}

    case ActionTypes.SUM_INVENTARIO:
      const sum = state.totalInventario + payload
      return { ...state , totalInventario:sum }
    case ActionTypes.AGREGAR_PRODUCTO:
      return { ...state , productos: [...state.productos , payload] }
    default: 
        return state;
      
      }

}

// actions

export const productoInventario = ()=> async(dispatch) =>{

    try{
      const data = await fetch('https://ferreteriadonraul.herokuapp.com/productos')
      const response = await data.json()
      console.log(response)
      dispatch(
        {
          type: ActionTypes.SET_PRODUCTOS,
          payload: response
        }
      )

    }catch (error) {
      console.log(error)
    }

}

export const agregarProducto = (producto) => async (dispatch)=>{
  try {
    const data = await fetch("https://ferreteriadonraul.herokuapp.com/productos", {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const response = await data.json()
      console.log(response)
      dispatch({
        type: ActionTypes.AGREGAR_PRODUCTO,
        payload: response
      })
  } catch (error) {
    console.log(error)
  }
}

export const sumInventario = (precioCostoAcum)=>{
  return {
    type: ActionTypes.SUM_INVENTARIO,
    payload: precioCostoAcum
  }
}

export const desregistrar = ()=>{
  return{
    type: ActionTypes.DESREGISTRAR
  }
}

export const errorInventario = (error)=>{
  return {
    type: ActionTypes.INVENTARIO_ERROR,
    payload: error
    }
}