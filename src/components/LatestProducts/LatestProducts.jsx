import React from "react"
import Products from "../Products/Products"

const LatestProducts = ({ latestProducts }) => {
    if (!latestProducts || latestProducts.length === 0) return null

    const products = [...latestProducts]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 6)

    return (
        <section className="py-16 bg-gray-50 my-20">
            <h2 className="text-3xl font-bold text-center mb-10">Latest Products</h2>
            <div className="max-w-7xl mx-auto px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform cursor-pointer overflow-hidden"
                    >
                        <Products product={product} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LatestProducts
