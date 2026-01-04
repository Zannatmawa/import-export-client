import React, { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'
import { FaMoon, FaRegUser, FaSun } from "react-icons/fa";
import toast from "react-hot-toast"
// import { ship } from '../../assets/Ship.gif'
//maliha@gmail.com
//@Mawa733

const Navbar = () => {

    const { user, logOut, mode, setMode } = use(AuthContext)

    const handleLogOutUser = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully")
            })
            .catch(() => {
                toast.error("Logout failed")
            })
    }

    const links = <>
        <Link className='m-2' to="/">Home</Link>
        <Link className='m-2' to="/all-products">All Products</Link>
        <Link className='m-2' to="/services">Services</Link>
        <Link className='m-2' to="/contact">Contact us</Link>
        <Link className='m-2' to="/privacy">Privacy & Terms</Link>



        {user && <>
            <Link className='m-2' to="/my-exports">My Exports</Link>
            <Link className='m-2' to="/my-imports">My Imports</Link>
        </>}
        <Link className='m-2' to="/add-exports">Add Exports</Link>
    </>
    //     ${mode ? "bg-black text-white" : "bg-base-100 text-black"}
    return (
        <div className={`navbar  shadow-sm bg-base-100 ${mode ? "bg-black text-white" : "bg-base-100 text-black"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <h1>{user?.displayName}</h1>
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    {/* <image src={ship} alt="logo" className="w-10 h-10 mr-2" />  */}
                    Import Export Hub
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">

                {/* {mode ? <FaMoon /> : <FaSun />} */}
                <button
                    onClick={() => setMode(!mode)}
                    className="px-4 py-2  mr-4"
                >
                    {mode ? <FaSun /> : <FaMoon />}
                </button>
                {
                    user ? <>
                        <div className="dropdown mr-20">
                            {/* Trigger */}
                            <div tabIndex={0} className="btn btn-ghost ">
                                <div className='bg-base-600 h-10 rounded-full w-10'>
                                    <img className='rounded-full' src={user?.photoURL} alt="" />
                                </div>
                            </div>

                            <ul
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-35 p-2 shadow z-50"
                            >
                                <Link className='m-2'>Profile</Link>
                                <Link className='m-2' to="/dashboard">Dashboard</Link>
                                <Link onClick={handleLogOutUser} to="/auth/login" className='m-2'>Sign Out</Link>

                            </ul>
                        </div>

                    </> :
                        <>
                            <FaRegUser />
                            <Link to="/auth/login" className="btn btn-primary ml-4">Login</Link>
                        </>
                }

            </div>
        </div>
    )
}

export default Navbar