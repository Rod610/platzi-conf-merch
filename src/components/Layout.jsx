import React from 'react';

import {Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

const Layout = () => {
    return (
        <div className='Main'>
            <Header />

            <p className="text-3xl font-semibold text-primary dark:text-white">Our Recomendations</p>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;