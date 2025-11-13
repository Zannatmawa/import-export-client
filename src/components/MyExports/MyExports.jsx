import React, { use, useEffect, useRef, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import Swal from 'sweetalert2'
import { AuthContext } from '../contexts/AuthContext'

const MyExports = () => {
    const { user } = use(AuthContext)
    const ExportedProducts = useLoaderData()
    const importModalRef = useRef(null)

    const [exports, setExports] = useState([]);
    console.log(exports)
    const { _id } = ExportedProducts;
    const handleImportModalOpen = () => {
        importModalRef.current.showModal()
    }
    useEffect(() => {

        if (user?.email) {
            fetch(`http://localhost:3000/products?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
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
    return (
        <div className="overflow-x-auto">
            <h6>Total:{exports.length}</h6>

            <table className="table">
                {/* head */}
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
                {
                    exports.map((product, index) => <tbody key={index}>

                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={product.product_image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.product_name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{product.price} </td>
                            <td>{product.rating} </td>
                            <td>{product.origin_country} </td>
                            <td>{product.available_quantity} </td>
                            <th>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-ghost btn-sm">Delete</button>
                            </th>
                            <th>
                                <button onClick={handleImportModalOpen} className='btn btn-primary btn-sm'>Update</button>
                                <dialog ref={importModalRef} className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Update Product!</h3>
                                        <form >
                                            <fieldset className="fieldset">
                                                {/* name */}
                                                {/* <label className="label">Name</label>
                                                <input readOnly defaultValue={user?.displayName} name='name' type="text" className="input w-full" /> */}
                                                <label className="label"> Product Name</label>
                                                <input name='product_name' type="text" className="input w-full" placeholder="Product Name" />
                                                <label className="label">Product Image</label>
                                                <input required name='photo' type="text" className="input w-full" placeholder="Product Url" />
                                                <label className="label">Price</label>
                                                <input name='price' type="text" className="input w-full" placeholder="Price" />
                                                <label className="label">Origin Country</label>
                                                <input name='origin' type="text" className="input w-full" placeholder="Country of Origin" />
                                                <label className="label"> Rating</label>
                                                <input name='rating' type="text" className="input w-full" placeholder="Rating" />
                                                <label className="label"> Available quantity</label>
                                                <input name='quantity' type="text" className="input w-full" placeholder="Available quantity" />

                                                <button className="btn btn-neutral mt-4">Update</button>

                                            </fieldset>

                                        </form>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </th>
                        </tr>

                    </tbody>
                    )
                }

            </table>
        </div>
    )
}

export default MyExports