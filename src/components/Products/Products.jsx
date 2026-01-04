import { Link } from "react-router"

const Products = ({ product }) => {
    const { _id, product_name, price, product_image, origin_country, rating, available_quantity } = product
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform overflow-hidden h-full">
            <figure className="h-[220px] w-full">
                <img
                    src={product_image}
                    alt={product_name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="p-4 flex flex-col justify-between h-[220px]">
                <div>
                    <div className="flex justify-between mb-3">
                        <p className="font-semibold text-sm line-clamp-1">{product_name}</p>
                        <p className="font-semibold text-sm">{price}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="badge badge-outline badge-primary">{origin_country}</span>
                        <span className="badge badge-outline badge-primary">{rating}</span>
                        <span className="badge badge-outline badge-primary">{available_quantity}</span>
                    </div>
                </div>

                <Link
                    to={`/productDetails/${_id}`}
                    product={product}
                    className="btn btn-secondary w-full mt-auto"
                >
                    See Details
                </Link>
            </div>
        </div>
    )
}

export default Products
