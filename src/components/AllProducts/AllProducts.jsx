// import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import Products from '../Products/Products'

const AllProducts = () => {
    // const products = use(allProducts)
    const products = useLoaderData()
    // console.log(products)
    return (
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 m-5'>
            {
                products.map((product, index) => <Products key={index} product={product} />)
            }
        </div>
    )
}

export default AllProducts