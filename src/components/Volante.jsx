import React from 'react'


const Volante = () => {
  return ( 
      <div>
        <form>
         <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label">Nombre Proveedor</label>
           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
         </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Documento</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
         
         <button type="submit" className="btn btn-primary">Ingresar Productos</button>
     </form>

      </div>
   );
}
 
export default Volante;