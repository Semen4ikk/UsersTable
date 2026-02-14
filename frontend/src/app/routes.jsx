import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {MainPage} from "../pages/MainPage.jsx";
import {HashRouter as Router} from "react-router-dom";
import NotFoundPage from "../pages/notFountPage.jsx";



export default function AppRoutes() {
    return (
            <Router>
                <Routes>
                    <Route path="/main" element={<MainPage />} />
                    {/*<Route path="/" element={<MainPage />} />*/}
                    <Route path="/public" element={<NotFoundPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
    );
}
