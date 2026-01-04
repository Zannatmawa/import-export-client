import { useContext, useState } from "react"
import { Link, useLoaderData } from "react-router"
import { AuthContext } from "../contexts/AuthContext"
import ProductSkeleton from "../Home/ProductsSkeleton"

const Search = () => {
    const { mode } = useContext(AuthContext)
    const allProducts = useLoaderData()

    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [sortType, setSortType] = useState("")

    let filteredProducts = [...allProducts]

    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            (product.product_name || "").toLowerCase().includes(search.toLowerCase())
        )
    }

    if (sortType === "high") {
        filteredProducts.sort((a, b) => b.price - a.price)
    }

    if (sortType === "low") {
        filteredProducts.sort((a, b) => a.price - b.price)
    }

    const productsToRender = filteredProducts.map((app, index) => (
        <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform overflow-hidden"
        >
            <div className="p-4 text-center">
                <figure className="h-[220px] mb-4">
                    <img
                        src={app.product_image}
                        alt={app.product_name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </figure>

                <div className="flex justify-between mb-3">
                    <p className="font-semibold">{app.product_name}</p>
                    <p className="font-semibold">{app.price}</p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <span className="badge badge-outline badge-primary">{app.origin_country}</span>
                    <span className="badge badge-outline badge-primary">{app.rating}</span>
                    <span className="badge badge-outline badge-primary">{app.available_quantity}</span>
                </div>

                <Link
                    to={`/productDetails/${app._id}`}
                    className="btn btn-primary w-full"
                >
                    See Details
                </Link>
            </div>
        </div>
    ))

    return (
        <div className="mt-10 mx-auto w-11/12">
            <div className="flex justify-between items-center">
                <input
                    className={`border rounded w-[320px] h-[50px] px-4 mb-8 ${mode ? "bg-black text-white" : "bg-base-100 text-black"
                        }`}
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setLoading(true)
                        setSearch(e.target.value)
                        setTimeout(() => setLoading(false), 300)
                    }}
                    placeholder="Search by product name"
                />

                <div className="dropdown">
                    <div tabIndex={0} className="cursor-pointer">
                        <div className="bg-base-200 h-10 border rounded p-2 w-30">
                            Filter by Price
                        </div>
                    </div>

                    <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-36 p-2 shadow z-50">
                        <button onClick={() => setSortType("high")} className="m-2">
                            High to Low
                        </button>
                        <button onClick={() => setSortType("low")} className="m-2">
                            Low to High
                        </button>
                        <button onClick={() => setSortType("")} className="m-2">
                            All
                        </button>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading
                    ? [...Array(8)].map((_, i) => <ProductSkeleton key={i} />)
                    : productsToRender}
            </div>
        </div>
    )
}

export default Search
