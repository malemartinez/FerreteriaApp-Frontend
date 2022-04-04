import React , { useState} from "react";
import CreatorProduct from "./CreatorProduct";
import { useSelector } from "react-redux";

const Volante = () => {

  const productos = useSelector( state => state.inventario.productos )

  const [added , setAdded] = useState([
    {item: {},
      cantidad: 1
    }

  ])
  console.log(added)
  const agregarProducto = (itemAdded)=>{
    added.includes({ item:itemAdded , cantidad: 1 })?
     (
       setAdded( [...added] )

     ):(
      setAdded( [...added, { item: itemAdded , cantidad: 1 }] )
     )
  }

  const deleteItem =(itemDelete)=>{
    const newProductos = added.filter((i)=>i.item.id !== itemDelete.id)
   setAdded(newProductos)
    console.log(added)
  }

  // const agregarCantidad = (item) => {
  //   item.cantidad++
  //   setAdded( [...added , {...item , cantidad: item.cantidad++}] )
  // }
  // const deleteCantidad = (item) => {
  //   if(item.cantidad == 1){
  //     deleteItem(item)
  //   }

  //   setAdded( [...added , {...item , cantidad: item.cantidad--}] )
  // }




  return (
    <div>

        <div className="d-flex" >

          <div className="me-3 flex-fill">
            <div className="mb-3">
              <label htmlFor="proveedorNombre" className="form-label">
                Nombre Proveedor
              </label>
              <input type="text" className="form-control" id="proveedorNombre" />
            </div>

            <div className="mb-3">
              <label htmlFor="Identificación" className="form-label">
                Identificación
              </label>
              <input type="text" className="form-control" id="Identificación" />
            </div>

            <div className="mb-3">
              <label htmlFor="IDproveedor" className="form-label">
                IDproveedor
              </label>
              <input
                type="text"
                className="form-contprecio-costo form-control"
                id="IDproveedor"
                placeholder="IDproveedor"
              />
            </div>

            <div className="mb-3">

              {
                added.length == 0?(
                  <div>Agrega los productos </div>
                ):(
                  
                  <div>{  added.map((i) => {
                    return (
                      <li key={i.item.id} className="d-flex justify-content-between p-1 border-botton">
                        <div>
                          {i.item.nombre} 
                        </div> 
                        <div>
                        <i className="fa-solid fa-plus  color-icon"
                          // onClick = { ()=> agregarCantidad(i) }
                        ></i>
                          {i.cantidad}
                          <i className="fa-solid fa-trash-can ms-2 color-icon"
                            // onClick = { ()=> deleteCantidad(i) }
                          ></i>

                        </div>

                      </li>
                    )}
                    
                    )}</div>
                )
              }
             
            </div>

          </div>
          {
            productos.length == 0?(
              <div>No hay productos en stock</div>
            ):(

              <div className="d-flex flex-column flex-fill">
              {productos.map((item)=>{
               return( <li key={item.id} className="d-flex justify-content-between p-1 border-botton"> 
                  {item.nombre} 
                  <div>
                    <i className="fa-solid fa-plus  color-icon"
                      onClick = { ()=> agregarProducto(item) }
                    ></i>
                    <i className="fa-solid fa-trash-can ms-2 color-icon"
                      onClick = { ()=> deleteItem(item) }
                    ></i>
                  </div>

                </li>)
              })}
              
              </div>
            )
          }
          
        </div>


    </div>
  );
};

export default Volante;
