import React from 'react'
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/productApi'

const ManageProduct = () => {

 let {data}  = useGetProductsQuery()

  return (
    <>
    <div className="container">
      <h2>Manage Product</h2>
      <div>
        <Products  isAdmin={true} data={data}/>
      </div>
    </div>
    </>
  )
}

export default ManageProduct