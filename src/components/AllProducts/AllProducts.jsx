// import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import Products from '../Products/Products'
import Search from '../Search/Search'
import { useEffect } from 'react';

const AllProducts = () => {
    useEffect(() => {
        document.title = "Import Export Hub | All Products";
    }, []);
    // const products = use(allProducts)
    const products = useLoaderData()
    // console.log(products)
    return (
        <div className=''>
            <Search />
            {/* <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 m-5'>
                {
                    products.map((product, index) => <Products key={index} product={product} />)
                }
            </div> */}
        </div>

    )
}

export default AllProducts