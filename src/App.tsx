import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Projects, Blog, Contact, About } from './routes';

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const location: string = window.location.pathname;
    
    useEffect(() => {
        const handleResize = (): void => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return (): void => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect((): void => {
        if (width < 849) {
            if (showMenu) {
                document.querySelector("div#Title > svg")?.classList.add("show");
                document.getElementById("NavBar")!.style.display = "flex";
            } else {
                document.querySelector("div#Title > svg")?.classList.remove("show");
                document.getElementById("NavBar")!.style.display = "none";
            };
        } else {
            document.getElementById("NavBar")!.style.display = "flex";
        };
    }, [showMenu, width]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home path={location} menu={{value: showMenu, setter: setShowMenu}} />} />
                <Route path="/projects" element={<Projects path={location} menu={{value: showMenu, setter: setShowMenu}} />} />
                <Route path="/blog" element={<Blog path={location} menu={{value: showMenu, setter: setShowMenu}} />} />
                <Route path="/contact" element={<Contact path={location} menu={{value: showMenu, setter: setShowMenu}} />} />
                <Route path="/about" element={<About path={location} menu={{value: showMenu, setter: setShowMenu}} />} />
            </Routes>
        </Router>
    );
};

export default App;