import React, { use, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import { AuthContext } from '../components/contexts/AuthContext'

const HomeLayout = () => {
    const { mode, setMode } = use(AuthContext)
    useEffect(() => {
        document.title = "Import Export Hub | Home";
    }, []);
    //
    return (
        <div className={`nunito-font ${mode ? "bg-black text-gray-500" : "bg-base-100 text-black"}`}>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}

export default HomeLayout