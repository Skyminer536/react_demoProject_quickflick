import React from 'react';
import ReactDOM from 'react-dom/client';
import "../css/style.css";

import Header from "./header";
import Home from "../pages/home";
import About from "../pages/about";
import Videos from "../pages/videos";
import PageNotFound from "../pages/404";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="videos" element={<Videos />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>

    )

};

export default App;
