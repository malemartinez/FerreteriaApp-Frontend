import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { fetchData } from '../redux/inventarioDuck';

function Inventario() {

  const productos = useSelector( state => state.inventario.productos )
  // const searchedEpisodes = useSelector( state => state.inventario.searchedEpisodes )
  const dispatch = useDispatch();



  useEffect(()=>{
    dispatch(fetchData())
  
  } , [productos])


  return (
    <div>Inventario</div>
  )
}

export default Inventario