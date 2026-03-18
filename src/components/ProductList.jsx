import React from 'react'
import product from '../data/product'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {product.map((elem,idx)=>{
            return (
                <div >
                   <ProductCard key={elem.id} item={elem}/>
                </div>


            )

        })}


    </div>
  )
}

export default ProductList