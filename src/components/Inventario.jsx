import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { fetchData } from '../redux/inventarioDuck';
import ProductoCard from './ProductoCard';

function Inventario() {

  const productos = useSelector( state => state.inventario.productos )
  // const searchedEpisodes = useSelector( state => state.inventario.searchedEpisodes )
  const dispatch = useDispatch();



  useEffect(()=>{
    dispatch(fetchData())
  
  } , [productos])


  return (
    <div className="container">
      <div className="row">
      {
        productos.length == 0?(
          <div>Cargando datos</div>
        ):
        (
          productos.map((item)=>{
            return(
              <ProductoCard producto={item} key={item.id} />
            )
          })
        )
      }

      </div>
    </div>


  )
}

export default Inventario