import React from 'react'
import { Link } from 'react-router'

const Products = ({ product }) => {
    const { _id, product_name, price, product_image, origin_country, rating, available_quantity } = product
    //  w-86 shadow-sm  bg-base-100 border-2
    {/* <img src="https://i.ibb.co.com/RkSs1bDj/priscilla-du-preez-dlx-LGIy-2-VU-unsplash.jpg" alt="priscilla-du-preez-dlx-LGIy-2-VU-unsplash" border="0" /> */ }
    return (
        <>
            {/*   h-[200px]  px-4 pt-4*/}
            <div className="card my-5 mx-auto lg:w-[400px] md:w-[400px] w-[300px]">
                <div className="card-details text-center">
                    <figure className="image h-auto lg:w-[350px] lg:h-[300px] md:w-[350px] md:h-[300px]">
                        <img
                            src={product_image}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className='flex justify-between mb-5'>
                        <p className="font-bold text-md">{product_name}</p>
                        <p className="font-bold text-md">{price}</p>
                    </div>
                    <div className='flex'>
                        <div className="badge badge-outline badge-primary mr-1">{origin_country}</div>
                        <div className="badge badge-outline badge-primary mr-1">{rating}</div>
                        <div className="badge badge-outline badge-primary">{available_quantity}</div>
                    </div>
                </div>
                <button className="card-button"><Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">See Details</Link></button>
            </div>


            {/* <div className="card ">
                
                <div className="card-body text-center">
                    <h2 className="card-title  text-sm">{product_name}</h2>
                    <h2 className="card-title  text-sm">{price}</h2>
                    <div className="card-actions">
                        <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">See Details</Link>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Products