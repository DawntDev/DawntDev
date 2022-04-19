import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Projects, Blog, Contact, About } from './routes';

function App() {
    const location: string = window.location.pathname;

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home path={location} />} />
                <Route path="/projects" element={<Projects path={location} />} />
                <Route path="/blog" element={<Blog path={location} />} />
                <Route path="/contact" element={<Contact path={location} />} />
                <Route path="/about" element={<About path={location} />} />
            </Routes>
        </Router>
    );
};

export default App;