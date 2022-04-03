import React from 'react';
import { useRef , useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';




const Form = () => {

  const formRef = useRef(null);
  const dispatch = useDispatch();
  const producto = useSelector(state => state.inventario.producto)
  const [state , setState] = useState("")

  const onAdd = (event) => {
    event.preventDefault();
  
    const request = {
        cantidad: 0,
        idProveedor: string,
        nombre: string,
        precio: 0
    };

    
    // DataService.createToDo(Category, request)
    //   .then((response) => {
    //     const todo = response.data
    //     formRef.current.reset();
    //   });
  }

  const getData = (e)=>{
    const nombre = e.target.elements.nombre.value;
    const cantidad = e.target.elements.cantidad.value;
    const precio = e.target.elements.precio.value;
  }
  
  const onEdit = (event) => {
    event.preventDefault();
  
    const request = {
      name: state.name,
      id: item.id,
      completed: item.isCompleted,
      listID: Category
    };
  
    // DataService.updateToDo(Category,request)
    //   .then((response) => {
    //     const todo = response.data
    //     dispatch({ type: update-item, item: todo });
    //     setState({ name: "" });
    //     formRef.current.reset();
    //   });
  }

  return <> 
  
  {/* <form ref={formRef} className = 'form-container mb-3'>
    <input
      type="text"
      placeholder="Nombre producto"
      onChange={(event) => {
        console.log(event.target.value)
        setState({ ...state, name: event.target.value })
      }}  >

    </input>
    
  </form> */}

    <form ref={formRef} className = 'form-container mb-3' onSubmit={getData}>
      <div class="mb-3">
        <label for="" class="form-label">Nombre</label>
        <input 
          type="text" 
          class="form-contprecio-costo" 
          id="nombre" 
          placeholder='Nombre'
        />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Cantidad</label>
        <input 
          type="number" 
          class="form-contprecio-costo" 
          id="cantidad"
          placeholder='Cantidad'
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input 
          type="number" 
          class="form-contprecio-costo"
          placeholder='Precio-Costo' 
          id='precio'/>
      </div>



      <button type="submit" class="btn btn-warning" >Ingresar Producto</button>
    </form>
</>
}
export {Form};