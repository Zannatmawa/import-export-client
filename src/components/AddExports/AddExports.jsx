import React, { use } from 'react'
import { AuthContext } from '../contexts/AuthContext';




const AddExports = () => {
    const { user } = use(AuthContext)
    console.log(user.email)
    const handleExportSubmit = (e) => {
        e.preventDefault();
        const product_name = e.target.product_name.value;
        const product_image = e.target.photo.value;
        const price = e.target.price.value;
        const origin = e.target.origin.value;
        const rating = e.target.rating.value;
        const quantity = e.target.quantity.value;
        const created_at = new Date();

        const newImportItems = {
            product_name: product_name,
            product_image: product_image,
            price: price,
            rating: rating,
            origin_country: origin,
            available_quantity: quantity,
            created_at: created_at,
            exporter_email: user?.email
        }

        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newImportItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        alert("added successfully!")
        console.log(newImportItems)
    }
    return (
        <div>

            <div className="card bg-base-100 mx-auto p-5 m-5 w-full max-w-sm shadow-2xl">
                <h1 className="text-3xl font-bold">Add Exports!</h1>
                <div className="card-body">
                    <form onSubmit={handleExportSubmit}>
                        <fieldset className="fieldset">
                            <label className="label"> Product Name</label>
                            <input name='product_name' type="text" className="input" placeholder="Product Name" />
                            <label className="label">Product Image</label>
                            <input required name='photo' type="text" className="input" placeholder="Product Url" />
                            <label className="label">Price</label>
                            <input name='price' type="text" className="input" placeholder="Price" />
                            <label className="label">Origin Country</label>
                            <input name='origin' type="text" className="input" placeholder="Country of Origin" />
                            <label className="label"> Rating</label>
                            <input name='rating' type="text" className="input" placeholder="Rating" />
                            <label className="label"> Available quantity</label>
                            <input name='quantity' type="text" className="input" placeholder="Available quantity" />

                            <button className="btn btn-neutral mt-4">Add Export</button>
                            {/* Google */}

                            {/* <p>Dont have and account?<Link to="/auth/register">Register</Link></p> */}
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddExports