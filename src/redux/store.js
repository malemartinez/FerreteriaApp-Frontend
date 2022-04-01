import { createStore } from "redux";
import { combineReducers } from "redux";
import { firebaseReducer } from "./registroDuck";



const reducers = combineReducers({
  firebaseAuth: firebaseReducer,
  // allCharacters: characterReducer
})

const store = createStore(
  reducers, 
  {  }, /* estado incial */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

export default store ;