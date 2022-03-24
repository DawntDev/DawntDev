import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ITheme } from './context/interfaces';
import { Home, Projects, Blog, Contact } from './routes';

const themes: {light:ITheme, dark:ITheme} = {
    light: {
        background: "#fff",
        text: "#000",
        textShadow: "0 0 0 #fff",
        border: "1px solid #000"
    },
    dark: {
        background: "#000",
        text: "#fff",
        textShadow: "0 0 0 #000",
        border: "1px solid #fff"
    }
}

function App() {
    const [time, setTime] = useState<number>(new Date().getHours());
    const [theme, setTheme] = useState<ITheme>(themes[time < 18 ? "light" : "dark"]);
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => { 
        const interval: number = window.setInterval(() => { 
            setTime(new Date().getHours());
        }, 3_600_000);

        const onResize = (e: Event) => {
            const width: number = (e.target as Window).innerWidth;
            setWidth(width);
        };
        window.addEventListener("resize", onResize);

        return () => { 
            clearInterval(interval);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    useEffect(() => {
        setTheme(themes[time < 18 ? "light" : "dark"]);
    }, [time]);

    useEffect(() => {
        const html: HTMLHtmlElement | null = document.querySelector("html");
        for (const [key, value] of Object.entries(theme)) {
            const variable: string = `--${key}`;
            if (html && value) {
                html.style.setProperty(variable, value);
            };
        };

    }, [theme]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home theme={theme} width={width} />} />
                <Route path="/projects" element={<Projects theme={theme} width={width}  />} />
                <Route path="/blog" element={<Blog theme={theme} width={width}  />} />
                <Route path="/contact" element={<Contact theme={theme} width={width}  />} />
            </Routes>
        </Router>
    );
};

export default App;