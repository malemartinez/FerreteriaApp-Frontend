import React, { useEffect } from 'react';
import { useRef , useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { agregarProducto } from '../redux/inventarioDuck';




const CreatorProduct = () => {

  const formRef = useRef(null);
  const dispatch = useDispatch();



  const [nombre , setNombre] = useState("")
  const [precio , setPrecio] = useState("")
  const [cantidad , setCantidad] = useState("")
  const [idProveedor , setIdProveedor] = useState("")


  

  const getData = (e)=>{
    e.preventDefault();
    const producto ={
      nombre:nombre,
      precio: precio,
      cantidad: cantidad,
      idProveedor: idProveedor
    }
    console.log(producto)
    dispatch(agregarProducto(producto))
    formRef.current.reset();

  }
  
  
  return <> 

    <form ref={formRef} onSubmit={getData} className= "flex-fill">
      <h4>Ingresar Producto</h4>

            <div className="mb-3">
              <label htmlFor="nombreproducto" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-contprecio-costo form-control"
                id="nombreproducto"
                placeholder="NombreProducto"
                onChange = {(e)=> setNombre(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cantidad" className="form-label">
                Cantidad
              </label>
              <input
                type="text"
                className="form-contprecio-costo form-control"
                onChange = {(e)=> setCantidad(e.target.value)}
                id="cantidad"
                placeholder="Cantidad"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">
                Precio del producto
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-contprecio-costo form-control"
                  onChange = {(e)=> setPrecio(e.target.value)}
                  placeholder="Precio-Costo"
                  id="precio"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="idProveedor" className="form-label">
                Código proveedor
              </label>
              <input
                type="text"
                className="form-contprecio-costo form-control"
                onChange = {(e)=> setIdProveedor(e.target.value)}
                id="idProveedor"
                placeholder="idProveedor"
              />
            </div>

            <div className="d-flex">
              <button type="submit" className="btn btn-lg btn-warning flex-fill" >Ingresar Producto</button>
            </div>
      </form>    
</>
}
export default CreatorProduct;