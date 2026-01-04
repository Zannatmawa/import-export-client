// import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import Products from '../Products/Products'
import Search from '../Search/Search'
import { useEffect } from 'react';

const AllProducts = () => {
    useEffect(() => {
        document.title = "Import Export Hub | All Products";
    }, []);
    const products = useLoaderData()
    return (
        <div className=''>
            <Search />
        </div>

    )
}

export default AllProducts