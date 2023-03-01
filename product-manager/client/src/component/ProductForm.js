import React from 'react';
import{Formik, Field,Form} from "formik"
import * as Yup from "yup"

const ProductForm = (props) => {
   const{nombre, precio, onSubmitProp}=props;

  return (
    <div>
      <Formik
        initialValues={{
          nombre: nombre,
          precio: precio
        }}

        validationSchema={Yup.object().shape({
          nombre:Yup.string()
          .min(2,"El nombre es muy corto")
          .max(15, "El nombre es muy largo")
          .required("Por favor ingresa un nombre"),
          precio:Yup.number()
          .required("Por favor ingresa un precio")
        })}
      onSubmit={(values,{setSubmitting})=>{
        console.log("INFO DEL FORMIK",values)
        onSubmitProp(values);
      }}
      >
        {(errors, touched, handleSubmit)=>{
          return(
            <div>
              <h2>FORMULARIO DEL PRODUCTO</h2>
              <Form>

                <label htmlFor="nombre" class="form-label">Nombre</label>
                <Field id="nombre" type="text" placeholder="Ingresa un nombre" name="nombre" className="form-control"></Field>
                {errors.nombre && touched.nombre && <p>{errors.nombre}</p>}

                <label htmlFor="precio">Precio</label>
                <Field id="precio" type="number" placeholder="Ingresa un precio" name="precio" className="form-control"></Field>
                {errors.precio && touched.precio && <p>{errors.precio}</p>}

                <button className='btn btn-primary' type="submit" /* disabled={Object.values(errors).length>0   */>ENVIAR</button>

              </Form>
            </div>
          )
        }}
      </Formik>
    </div>
  );
}

export default ProductForm;
