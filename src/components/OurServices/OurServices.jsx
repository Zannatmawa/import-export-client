import React from 'react'

const OurServices = () => {
    return (
        <div className='bg-gray-100 mb-25'>
            <div className='py-5 flex justify-center items-center mx-auto flex-col text-center '>
                <h1 className='text-4xl font-bold p-5 '>Our Services</h1>
                <p className='max-w-[700px] text-center mb-5'>The Import Management System is a web-based platform designed to help importers manage their imported product data efficiently. It stores detailed information such as product name, image, price, origin country, available quantity, and ratings.</p>
            </div>
            <div className='flex justify-around items-center w-11/12 mx-auto my-5 flex-col lg:flex-row md:flex-col'>
                <div className='max-w-[600px] mb-2'>
                    <img className='lg:w-[500px] md:w-[500px] h-[500px] object-cover' src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h2 className='text-2xl font-bold my-5'>What is the purpose of this import system?</h2>
                    <p className='max-w-[550px] text-justify text-sm'>The purpose of this import system is to connect importers and suppliers by managing imported product information efficiently. It helps users track imported goods, view detailed product data such as price, origin, and quantity, and maintain records for business transparency. This system simplifies import management by providing a digital solution for organizing all import-related data in one place.
                    </p>


                </div>
                <div className='max-w-[600px]'>
                    <img className='lg:w-[500px] md:w-[500px] h-[500px] object-cover' src="https://images.unsplash.com/photo-1502621737164-fb78cb47e276?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h2 className='text-2xl font-bold my-5'>How does the import system benefit users?</h2>
                    <p className='max-w-[550px] text-justify text-sm'>The import system benefits users by saving time and improving accuracy in handling import records. It allows importers to easily add, update, and view product details, reducing paperwork and manual errors. Additionally, it provides real-time insights into available products, ratings, and origin countries — helping users make better business decisions.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default OurServices