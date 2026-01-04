import { use, useRef, useState } from 'react';
import { useLoaderData } from 'react-router'
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const products = useLoaderData();
    const importModalRef = useRef(null)
    const { _id: productId, product_name, product_image, price, origin_country, rating, available_quantity, created_at } = products;
    const { user } = use(AuthContext)
    const { btn, setBtn } = useState(false);
    const [availble, setAvailable] = useState(available_quantity)


    const handleImportModalOpen = () => {
        importModalRef.current.showModal()
    }
    const handleImportSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const quantity = e.target.quantity.value;

        if (available_quantity < quantity) {
            alert("Not availble")
            setBtn(true)
        }
        const newImportItems = {
            product: productId,
            product_name: product_name,
            product_image: product_image,
            price: price,
            rating: rating,
            origin_country: origin_country,
            importer_email: email,
            available_quantity: available_quantity,
            imported_quantity: quantity,
        }
        //
        fetch('https://import-export-hub-sigma.vercel.app/imports', {
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
        alert("Imported successfully!")
        console.log(newImportItems)
    }
    return (
        <>
            <div className='w-11/13 mx-auto lg:p-10 md:p-10 mt-5 flex justify-between md:justify-around  lg:justify-around flex-col lg:flex-row md:flex-row'>
                <figure>
                    <img className='md:-w-[500px] lg:w-[500px] w-[350px] rounded-lg'
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="rounded-lg bg-base-300 lg:my-0 my-10   shadow-sm lg:w-[500px] w-[350px] md:w-[600px]">
                    <div className="card-body">
                        <h2 className="card-title text-3xl mb-2">{product_name}</h2>
                        <h2 className="card-title mb-2">Origin Country:{origin_country}</h2>
                        <div className="badge badge-lg badge-outline badge-primary mb-2">
                            {rating}
                        </div>
                        <h2 className="card-title mb-2">Price:{price}</h2>
                        <h2 className="card-title">Available Quantity:{available_quantity}</h2>
                        <h2 className='text-2xl font-bold text-[#0A4679] mt-10'>Products Details</h2>
                        <p className='lg:text-sm md:text-sm text-lg text-justify'>Experience premium quality and performance with the {product_name}. Designed with attention to detail, this product combines durability, modern design, and exceptional functionality to meet your everyday needs.  Whether you’re at home, work, or on the go, the {product_name} ensures convenience and reliability. <br /> It’s the perfect choice for anyone who values comfort, efficiency, and style in one package.</p>
                        {/* <h2 className="card-title">Date:{created_at}</h2> */}
                    </div>
                    <button onClick={handleImportModalOpen} className='btn btn-primary w-full'>Import Now!</button>
                    <dialog ref={importModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Import Product!</h3>
                            <p className="py-4">fill the details of the  product your want to import</p>
                            <form onSubmit={handleImportSubmit}>
                                <fieldset className="fieldset">
                                    {/* name */}
                                    <label className="label">Name</label>
                                    <input readOnly defaultValue={user?.displayName} name='name' type="text" className="input w-full" />
                                    {/* email */}
                                    <label className="label">Email</label>
                                    <input readOnly defaultValue={user?.email} name='email' type="email" className="input w-full" placeholder="Email" />
                                    {/* password */}
                                    <label className="label">Quantity</label>
                                    <input name='quantity' type="text" className="input w-full" placeholder="add quantity" />
                                    <button disabled={btn} type='submit' className="btn btn-neutral mt-4 ">{btn ? "Disabled" : "Import Now"}</button>

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