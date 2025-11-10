import React from 'react'
import LatestProducts from '../LatestProducts/LatestProducts'
import AllProducts from '../AllProducts/AllProducts'
const latestProducts = fetch("http://localhost:3000/products").then((res) => res.json())

const Home = () => {
    //https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1700114339471-9e90a155d4b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Transport & Logistics   </h1>
                        <h1 className="mb-5 text-5xl font-bold">Digital Solution</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-lg btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <LatestProducts latestProducts={latestProducts} />
            {/* <AllProducts allProducts={latestProducts} /> */}
        </>
    )
}

export default Home