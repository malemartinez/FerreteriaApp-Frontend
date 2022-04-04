import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sumInventario } from '../redux/inventarioDuck';

function ProductoCard({producto}) {

  const dispatch = useDispatch();
  const cantidad = parseInt(producto.cantidad)
  const precio = parseInt(producto.precio)
  const precioCosto = cantidad* precio

  useEffect(()=>{
    dispatch(sumInventario(precioCosto))

  }, [dispatch])


  return (
    <div className='col-md-6 mb-2' >
      <div className="card shadow-sm p-3 rounded " >
        <div className="card-body">
          <div className='d-flex justify-content-between'>
            <h5 className="card-title">Producto: {producto.nombre}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Cantidad Total:{producto.cantidad}</h6>

          </div>
          <div className='d-flex'>
            <p >Precio Unidad: {producto.precio}</p>
            <p className='text-muted'>Precio en inventario: {precioCosto}</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductoCard