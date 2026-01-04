import { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import ProductSkeleton from "../Home/ProductsSkeleton";
import { all } from "axios";

const Search = () => {
    const { mode } = use(AuthContext)
    const allProducts = useLoaderData()
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false)


    if (loading) {
        return (
            <section className="py-16 my-20">
                <div className="max-w-7xl mx-auto px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[...Array(8)].map((_, i) => (
                        <ProductSkeleton key={i} />))}
                </div>
            </section>
        )
    }

    const apps = allProducts
        .filter(app =>
            (app.product_name || "").toLowerCase().includes(search.toLowerCase())
        )
        .map((app, index) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading
                    ? [...Array(8)].map((_, i) => <ProductSkeleton key={i} />)
                    : apps}
            </div>

        </div>
    )
}

export default Search
