import React from "react";
import { Routes, Route } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

import Home from "./Home";
import About from "./About";


import usePageLoader from "@/hooks/usePageLoader";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Resume from "./Resume";
import Projects from "./Projects";


const Base = () => {
    const loading = usePageLoader(1200); // 1.2s spinner

    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100">
                {loading ? (
                    <div className="h-screen flex items-center justify-center">
                        <Triangle
                            visible={true}
                            height="200"
                            width="200"
                            color="#c6cfc5ff"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                ) : (
                    // ⭐ Actual Pages
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/projects" element={<Projects/>} />
                    </Routes>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Base;
