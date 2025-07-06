import React from 'react';
import Header from '../components/Header';
import { Outlet } from "react-router";
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Strength from "../components/Strength";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <header className="bg-gray-400 ">
        <Header></Header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <section className="min-h-screen bg-gray-100 mb-10">
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;