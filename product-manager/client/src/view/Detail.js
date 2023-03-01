import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';

const Detail = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct()
  }, []);

  const getProduct = async() =>{
    const response = await simpleGet("http://localhost:8000/api/products/"+id)
    setProduct(response.data.product)
  }

  return (
    <div>
      <h3>Detalle del producto id: {id}</h3>
      <h4>Nombre del producto: {product?.nombre}</h4>
      <h4>Precio: {product?.precio} </h4>
      <button className='btn btn-dark'><Link to={"/product/edit/"+id}>Editar Producto</Link></button>
      <button className='btn btn-warning' onClick={()=>navigate("/")}>VOLVER</button>
    </div>
  );
}

export default Detail;
