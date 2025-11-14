import React, { use, useEffect, useRef, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import Swal from 'sweetalert2'
import { AuthContext } from '../contexts/AuthContext'

const MyExports = () => {
    const { user } = use(AuthContext)
    const ExportedProducts = useLoaderData()
    const updateModalRef = useRef(null)
    const [exports, setExports] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/exports?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setExports(data)
                })
        }
    }, [user?.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/products/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingImports = exports.filter(products => products._id !== id)
                            setExports(remainingImports);
                        }
                    })
            }
        });
    }

    const openUpdateModal = (product) => {
        setSelectedProduct(product)
        updateModalRef.current.showModal()
    }

    const handleUpdateProduct = (e, id) => {
        e.preventDefault()

        const updateProduct = {
            product_name: e.target.product_name.value,
            product_image: e.target.photo.value,
            price: e.target.price.value,
            rating: e.target.rating.value,
            origin_country: e.target.origin.value,
            available_quantity: parseInt(e.target.quantity.value),
            exporter_email: user?.email,
            updated_at: new Date()
        }

        fetch(`http://localhost:3000/exports/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0 || data.acknowledged) {
                    alert("Updated successfully!")
                    setExports(prev =>
                        prev.map(p => p._id === id ? { ...p, ...updateProduct } : p)
                    )
                    updateModalRef.current.close()
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <h6>Total:{exports.length}</h6>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name and Image</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Origin Country</th>
                        <th>Available Quantity</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>

                {exports.map((product, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={product.product_image} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.product_name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.rating}</td>
                            <td>{product.origin_country}</td>
                            <td>{product.available_quantity}</td>

                            <th>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-ghost btn-sm">
                                    Delete
                                </button>
                            </th>

                            <th>
                                <button onClick={() => openUpdateModal(product)} className='btn btn-primary btn-sm'>
                                    Update
                                </button>
                            </th>
                        </tr>
                    </tbody>
                ))}

            </table>

            <dialog ref={updateModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Product</h3>

                    {selectedProduct && (
                        <form onSubmit={(e) => handleUpdateProduct(e, selectedProduct._id)}>
                            <fieldset className="fieldset">
                                <label className="label">Product Name</label>
                                <input name='product_name' defaultValue={selectedProduct.product_name} type="text" className="input w-full" />

                                <label className="label">Product Image</label>
                                <input name='photo' defaultValue={selectedProduct.product_image} type="text" className="input w-full" />

                                <label className="label">Price</label>
                                <input name='price' defaultValue={selectedProduct.price} type="text" className="input w-full" />

                                <label className="label">Origin Country</label>
                                <input name='origin' defaultValue={selectedProduct.origin_country} type="text" className="input w-full" />

                                <label className="label">Rating</label>
                                <input name='rating' defaultValue={selectedProduct.rating} type="text" className="input w-full" />

                                <label className="label">Available Quantity</label>
                                <input name='quantity' defaultValue={selectedProduct.available_quantity} type="text" className="input w-full" />

                                <button type='submit' className="btn btn-neutral mt-4 w-full">Update</button>
                            </fieldset>
                        </form>
                    )}

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default MyExports
