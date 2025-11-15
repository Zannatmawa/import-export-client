import React from 'react'
// bg-[#0A4679]
const Contact = () => {
    return (
        <div className='bg-gray-50 lg:m-10 md:m-10'>
            <div className='py-5 flex justify-center items-center mx-auto flex-col text-center '>
                <h1 className='text-4xl font-bold p-5 '>Contact Us</h1>
                <p className='max-w-[700px] text-center mb-5'>The Import Management System is a web-based platform designed to help importers manage their imported product data efficiently.</p>
            </div>
            <div className='w-11/12 mx-auto flex justify-center flex-col lg:flex-row md:flex-col  items-center lg:p-10 md:p-10'>
                <img
                    className="lg:-w-[600px] md:w-[600px] w-[300px] lg:h-[400px] md:h-[400px] h-[200px] rounded-lg shadow-2xl"
                    src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                />
                <div className="card  m-5   bg-base-100 mx-auto w-full max-w-md shadow-2xl">
                    <h1 className="text-2xl font-bold">Send your message!</h1>
                    <div className="card-body ">
                        <form >
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Message</label>
                                <input type="text" className="input" placeholder="send your message" />
                                <button className="btn btn-neutral mt-4">Send</button>
                            </fieldset>
                        </form>

                    </div>
                </div>

            </div >
        </div>
    )
}

export default Contact