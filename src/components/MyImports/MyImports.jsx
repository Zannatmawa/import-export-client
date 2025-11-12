import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import Swal from 'sweetalert2'

const MyImports = () => {
    const importedProducts = useLoaderData()
    const [imports, setImports] = useState([]);
    const { _id } = importedProducts;
    console.log(imports)

    const handleRemove = (id) => {
        fetch(`http://localhost:3000/imports/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setImports(data)
            })
        alert("deleted")
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire({
        //             title: "Deleted!",
        //             text: "Your file has been deleted.",
        //             icon: "success"
        //         });
        //     }
        // });
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name and Image</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Origin Country</th>
                        <th>Available Quantity</th>
                        <th>Imported Quantity</th>
                        <th>remove</th>
                        <th>Details</th>
                    </tr>
                </thead>
                {
                    importedProducts.map((product, index) => <tbody key={index}>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
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
                            <td>{product.imported_quantity} </td>
                            <th>
                                <button onClick={() => handleRemove(product._id)} className="btn btn-ghost btn-sm">Remove</button>
                            </th>
                            <th>
                                <Link to={`/productDetails/${product._id}`} className="btn btn-primary btn-sm"> Details</Link>

                                {/* <button className="btn btn-ghost btn-sm"> Details</button> */}
                            </th>
                        </tr>

                    </tbody>
                    )
                }

            </table>
        </div>
    )
}

export default MyImports