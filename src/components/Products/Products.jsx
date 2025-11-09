import React from 'react'

const Products = ({ product }) => {
    return (
        <>
            <div className="card w-86 shadow-sm  bg-base-100 border-2">
                <figure className="px-4 pt-4">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title  text-sm">{product.product_name}</h2>
                    <h2 className="card-title  text-sm">{product.price}</h2>
                    <h2 className="card-title  text-sm">Origin Country:{product.origin_country}</h2>
                    <h2 className="card-title  text-sm">Rating:{product.rating}</h2>
                    <h2 className="card-title  text-sm">Available Quantity:{product.available_quantity}</h2>
                    <h2 className="card-title  text-sm">Date:{product.created_at}</h2>
                    <div className="card-actions">
                        {/* <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">View Details</Link> */}
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products