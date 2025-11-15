import React from 'react'
import { CiFacebook, CiYoutube } from 'react-icons/ci'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-[#0A4679]  text-gray-300 p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className='m-2' to="/">Home</Link>
                    <Link className='m-2' to="/all-products">All Products</Link>
                    <Link className='m-2' to="/add-exports">Add Exports</Link>
                    <Link className='m-2' to="/add-exports">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <FaXTwitter className='text-xl' />

                        <CiFacebook className='text-2xl' />

                        <CiYoutube className='text-2xl' />

                    </div>
                </nav>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-black text-gray-300 p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by IO hub</p>
                </aside>
            </footer>
        </>

    )
}

export default Footer