import React, { useEffect, useState } from 'react';
import { simpleGet } from '../services/simpleGet';
import ProductForm from '../component/ProductForm';
import { simplePost } from '../services/simplePost';
import { simpleDelete } from '../services/simpleDelete';
import { Link } from 'react-router-dom';

const Main = () => {

  const [productos, setProductos] = useState();

  useEffect(() => {
    getProductos()
  }, []);

  const getProductos = async () =>{
    const response = await simpleGet("http://localhost:8000/api/products")
    console.log(response)
    setProductos(response.data.productos)
  }

  const crearProducto = async(values) =>{
    console.log("Valores desde el formik", values);
    const response = await simplePost("http://localhost:8000/api/products/new",values)
    setProductos([...productos,response.data.product])
  }

  const eliminarProducto = async(id) =>{
    const response = await simpleDelete("http://localhost:8000/api/products/delete/"+id)
    setProductos(productos.filter(producto=>producto._id!==id));
  }

  return (
    <div>
      <ProductForm nombre="" precio="" onSubmitProp={crearProducto} ></ProductForm>

      <h3>TODOS LOS PRODUCTOS DESDE LA BS</h3>

      <ul>
        {productos?.map((producto,index)=><li key={index}> <Link to={`/product/${producto._id}`}>{producto.nombre} - $ {producto.precio}</Link> <button className='btn btn-danger btn-sm' onClick={()=>eliminarProducto(producto._id)}>Eliminar</button></li>)}

        {/* {productos?.map((producto,index)=><li key={index}> <Link to={"/product/"+producto._id}>{producto.nombre} - $ {producto.precio}</Link> </li>)} */}
      </ul>


    </div>
  );
}

export default Main;
