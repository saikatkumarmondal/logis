import React from 'react';
import Header from '../components/Header';
import { Outlet } from "react-router";
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const Root = () => {
    return (
        <div>
            <header className='bg-gray-400 '>
                <Header></Header>
                <Navbar></Navbar>
                <Banner ></Banner>

                
            </header>
            <main>
                <Outlet></Outlet>
               
            </main>
        </div>
    );
};

export default Root;