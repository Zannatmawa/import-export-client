import React, { use } from 'react'
import Products from '../Products/Products'

const LatestProducts = ({ latestProducts }) => {
    const products = use(latestProducts)
    // console.log(products)
    //.sort({ created_at: -1 })
    return (
        <div className='grid  gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 bg-gray-50 mb-25'>
            {
                products.sort((a, b) => b.created_at - a.created_at).slice(0, 6).map((product, index) =>
                    <Products key={index} product={product} />
                )
            }
        </div>
    )
}

export default LatestProducts