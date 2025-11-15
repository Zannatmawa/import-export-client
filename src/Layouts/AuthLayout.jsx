import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AuthLayout = () => {
    useEffect(() => {
        document.title = "Import Export Hub | Authentication";
    }, []);
    return (
        //  className='w-11/12 mx-auto py-4'
        <div className='bg-base-200 min-h-screen' >
            <header>
                <Navbar />
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    );
};

export default AuthLayout;