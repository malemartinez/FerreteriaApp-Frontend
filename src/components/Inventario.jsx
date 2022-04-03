import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';

function Inventario() {

  const productos = useSelector( state => state.inventario.productos )
  // const searchedEpisodes = useSelector( state => state.inventario.searchedEpisodes )
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch('https://ferreteriadonraul.herokuapp.com/productos')
    const response = await data.json()
    console.log(response)
    // dispatch(setEpisodes(response.results))

  }

  useEffect(()=>{
    fetchData()
  } , [])


  return (
    <div>Inventario</div>
  )
}

export default Inventario