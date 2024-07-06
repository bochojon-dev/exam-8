import React from 'react'
import  { useGetInputValue } from '../../hooks/useGetInputValue'
import { useCreateProductMutation } from '../../context/productApi'
// import { useCreateProductMutation, useGetCategorysQuery } from '../../context/productApi'


let initialState = {
    title: '',
    price: '',
    image: '',
    oldPrice: '',
    category: ''
}


const CreateProduct = () => {

  const {handleChange , formData , setFormData } =  useGetInputValue(initialState)


  const [createProduct] = useCreateProductMutation()
  


   const handleCreateProduct = e => {

      e.preventDefault()
      createProduct(formData);

   }

  return (
    <>
    <div className="create__product">
      <h2>Create product</h2>
      <form onSubmit={handleCreateProduct} action="">
         <span>
            <label htmlFor="">Title</label>
            <input value={formData.title} onChange={handleChange} name='title' type="text" />
         </span>
         <span>
            <label htmlFor="">price in $</label>
            <input value={formData.price} onChange={handleChange} name='price' type="number" />
         </span>
         <span>
            <label htmlFor="">image-url</label>
            <input value={formData.image} onChange={handleChange} name='image' type="text" />
         </span>
         <span>
            <label htmlFor="">old-price in $</label>
            <input value={formData.oldPrice} onChange={handleChange} name='oldPrice' type="number" />
         </span>
         <span>
            <label  htmlFor="">desc</label>
            <textarea  value={formData.desc} onChange={handleChange} name='desc' type="text" />
         </span>
         <button>Create</button>
      </form>
    </div>
    </>
  )
}

export default CreateProduct