import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/simplePut';
import ProductForm from '../component/ProductForm';

const Update = () => {

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

  const editarProducto = async(values) =>{
    const response = await simplePut("http://localhost:8000/api/products/update/"+id,values)
    navigate("/")
  }

  return (
    <div>
      <h2>Actualizar producto de ID: {id} </h2>
        {product &&
        <ProductForm
        nombre={product.nombre}
        precio={product.precio}
        onSubmitProp={editarProducto}>
        </ProductForm>
        }
    </div>
  );
}

export default Update;
