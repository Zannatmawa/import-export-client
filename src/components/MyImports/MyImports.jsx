import React from 'react'

const MyImports = () => {
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
                <tbody>
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
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>Price: </td>
                        <td>Rating</td>
                        <td>country</td>
                        <td>Quantity</td>
                        <td>Imported</td>
                        <th>
                            <button className="btn btn-ghost btn-sm">Remove</button>
                        </th>
                        <th>
                            <button className="btn btn-ghost btn-sm"> Details</button>
                        </th>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default MyImports