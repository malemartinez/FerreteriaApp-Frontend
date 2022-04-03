import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sumInventario } from '../redux/inventarioDuck';

function ProductoCard({producto}) {

  const dispatch = useDispatch();

  const [precioInventario , setPrecioInventario] = useState(null)
  setPrecioInventario(producto.cantidad * producto.precio)
  dispatch(sumInventario(precioInventario))

  return (
    <div className='col-md-4 mb-2' >
      <div className="card shadow-sm p-3 rounded " >
        <div className="card-body">
          <div className='d-flex justify-content-between'>
            <h5 className="card-title">Producto: {producto.nombre}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Cantidad Total:{producto.cantidad}</h6>

          </div>
          <div className='d-flex'>
            <p>Precio Unidad: {producto.precio}</p>
            <p>Precio en inventario: {(producto.cantidad * producto.precio)}</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductoCard