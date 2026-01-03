import { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";



const Search = () => {
    const { mode } = use(AuthContext)
    const allProducts = useLoaderData()
    const [search, setSearch] = useState("");


    const apps = allProducts.filter((app) =>
        (app.product_name || "").toLowerCase().includes(search.toLowerCase())
    ).map((app, index) => (
        <div key={index} className="card my-5 mx-auto lg:w-[400px] md:w-[350px] w-[300px]">
            <div className="card-details text-center">
                <figure className="image h-auto lg:w-[350px] lg:h-[300px] md:w-[300px] md:h-[300px]">
                    <img
                        src={app.product_image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className='flex justify-between mb-5'>
                    <p className="font-bold text-md">{app.product_name}</p>
                    <p className="font-bold text-md">{app.price}</p>
                </div>
                <div className='flex'>
                    <div className="badge badge-outline badge-primary mr-1">{app.origin_country}</div>
                    <div className="badge badge-outline badge-primary mr-1">{app.rating}</div>
                    <div className="badge badge-outline badge-primary">{app.available_quantity}</div>
                </div>
            </div>
            <button className="card-button"><Link to={`/productDetails/${app._id}`} className="btn btn-primary w-full">See Details</Link></button>
        </div>
    ));

    return (
        <div className='mt-5 mx-auto w-11/12'>
            <input

                className={`border  rounded w-[300px] h-[50px] ${mode ? "bg-black text-white" : "bg-base-100 text-black"}`}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="    Search by product name"
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {apps}
            </div>
        </div>
    )
}

export default Search