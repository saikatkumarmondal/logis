import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Strength from "../components/Strength";
import Footer from "../components/Footer";
import FollowCursor from "../components/FollowCursor";

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);
  }, []);

  return (
    <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
      {/* Cursor Follower */}
      <FollowCursor color="#ff0000aa" />

      <header className="bg-gray-400">
        <Header />
        <Navbar />
        <Banner />
      </header>

      <main>
        <section className="min-h-screen bg-gray-100 dark:bg-neutral-900 mb-10">
          <Outlet />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
