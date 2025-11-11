import { use, useRef } from 'react';
import { useLoaderData } from 'react-router'
import { AuthContext } from '../contexts/AuthContext';

const ProductDetails = () => {
    const products = useLoaderData()
    const importModalRef = useRef(null)
    const { _id: productId, product_name, origin_country, rating, available_quantity, created_at } = products;
    const { user } = use(AuthContext)
    const handleImportModalOpen = () => {
        importModalRef.current.showModal()
    }
    const handleImportSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const quantity = e.target.quantity.value;
        console.log(_id, name, email, quantity);

        const newImportItems = {
            product: productId
        }
    }
    return (
        <>
            <div className=' p-10 flex  justify-around'>
                <figure>
                    <img className='md:-w-[600px] lg:w-[600px] w-[350px] rounded-lg'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    <div className='card bg-base-100  shadow-sm lg:w-[600px] w-[350px] md:w-[600px]  mt-4'>

                        <div className='card-body'>

                            <p>Experience premium quality and performance with the {product_name}. Designed with attention to detail, this product combines durability, modern design, and exceptional functionality to meet your everyday needs.  Whether you’re at home, work, or on the go, the {product_name} ensures convenience and reliability. <br /> It’s the perfect choice for anyone who values comfort, efficiency, and style in one package.</p>
                        </div>
                    </div>

                </figure>
                <div className="card bg-base-300  shadow-sm lg:w-[600px] w-[350px] md:w-[600px]">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{product_name}</h2>
                        <h2 className="card-title">Origin Country:{origin_country}</h2>
                        <h2 className="card-title">Rating:{rating}</h2>
                        <h2 className="card-title">Available Quantity:{available_quantity}</h2>
                        <h2 className="card-title">Date:{created_at}</h2>
                    </div>
                    <button onClick={handleImportModalOpen} className='btn btn-primary'>Import Now!</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog ref={importModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Import Product!</h3>
                            <p className="py-4">fill the details of the  product your want to import</p>
                            <form onSubmit={handleImportSubmit}>
                                <fieldset className="fieldset">
                                    {/* name */}
                                    <label className="label">Name</label>
                                    <input readOnly defaultValue={user.displayName} name='name' type="text" className="input w-full" />
                                    {/* email */}
                                    <label className="label">Email</label>
                                    <input readOnly defaultValue={user.email} name='email' type="email" className="input w-full" placeholder="Email" />
                                    {/* password */}
                                    <label className="label">Quantity</label>
                                    <input name='quantity' type="text" className="input w-full" placeholder="add quantity" />
                                    <button type='submit' className="btn btn-neutral mt-4">Add to Import</button>

                                </fieldset>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            {/*  */}
        </>
    )
}

export default ProductDetails