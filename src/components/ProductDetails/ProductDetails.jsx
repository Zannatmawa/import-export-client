import { useLoaderData } from 'react-router'

const ProductDetails = () => {
    const products = useLoaderData()
    const { _id, product_name, origin_country, rating, available_quantity, created_at } = products;
    console.log(products)
    return (
        <div className=' p-10 flex  justify-around'>
            <figure>
                <img className='md:-w-[600px] lg:w-[600px] w-[350px] rounded-lg'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                <div className='card bg-base-100  shadow-sm lg:w-[600px] w-[350px] md:w-[600px]  mt-4'>

                    <div className='card-body'>

                        <p>Experience premium quality and performance with the {product_name}. Designed with attention to detail, this product combines durability, modern design, and exceptional functionality to meet your everyday needs.  Whether you’re at home, work, or on the go, the {product_name} ensures convenience and reliability. <br /> It’s the perfect choice for anyone who values comfort, efficiency, and style in one package.</p>
                    </div>
                </div>

            </figure>
            <div className="card bg-base-300  shadow-sm lg:w-[600px] w-[350px] md:w-[600px]">
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <h2 className="card-title  text-sm">Origin Country:{origin_country}</h2>
                    <h2 className="card-title  text-sm">Rating:{rating}</h2>
                    <h2 className="card-title  text-sm">Available Quantity:{available_quantity}</h2>
                    <h2 className="card-title  text-sm">Date:{created_at}</h2>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails