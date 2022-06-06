import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SiCodewars, SiSpotify, SiDiscord, SiLinkedin } from "react-icons/si";
import { CgMenuGridR, CgMenuGridO } from "react-icons/cg";
import Root from "../../routes";
import "./nav-bar.css";


export default function NavBar() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const active: string = useLocation().pathname;
    const pos = (elements: NodeListOf<Element>): number => {
        let y: number = 0;

        elements.forEach((e: Element, i: number) => {
            if (e.children[0].classList.contains("active")) {
                y = 100 / elements.length * i;
            };
        });

        return y;
    };

    useEffect(() => {
        const handleResize = (): void => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return (): void => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        if (width < 849) {
            if (showMenu) {
                document.getElementById("NavBar")!.style.textIndent = "0";
                document.getElementById("NavBar")!.style.width = "100%";
                document.querySelector("#NavBar > header > p")!.classList.add("show");
            } else {
                document.getElementById("NavBar")!.style.textIndent = "-9999px"
                document.getElementById("NavBar")!.style.width = "0";
                document.querySelector("#NavBar > header > p")!.classList.remove("show");
            };
        } else {
            document.getElementById("NavBar")!.removeAttribute("style");
            document.querySelector("#NavBar > header > p")!.classList.remove("show");
        };
    }, [showMenu, width]);

    useEffect(() => {
        const index: HTMLHtmlElement | null = document.querySelector("#index > div");
        let title: string = active === "/" ? "Dawnt" : active ? `Dawnt | ${active[1].toUpperCase()}${active.replace("/", "").slice(1)}` : "Dawnt";
        let elements: NodeListOf<Element> | null = document.querySelectorAll("nav > ul > li");
        let y: number = pos(elements);

        document.title = Root.map(rule => rule.path).includes(active) ? title : "Not Found";
        index!.style.top = `${y}%`;

        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("mouseover", () => {
                index!.style.top = `${100 / elements!.length * i}%`;
            });

            elements[i].addEventListener("mouseout", () => {
                index!.style.top = `${y}%`;
            });
        };
    }, [active]);

    return (
        <>
            {width < 849 && !showMenu && <CgMenuGridR id="Menu" onClick={(): void => setShowMenu(!showMenu)} />}
            <aside id="NavBar">
                <header>
                    <div id="Button">
                        <CgMenuGridO onClick={(): void => setShowMenu(!showMenu)} />
                    </div>
                    <a href="https://github.com/DawntDev" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><img src="./assets/img/avatar.gif" alt="avatar" width="6rem" /></a>
                    <a href="https://github.com/DawntDev" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><h1>Dawnt</h1></a>
                    <p>Mexico<br /> Software Developer</p>
                </header>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                    <div id="index">
                        <div></div>
                    </div>
                </nav>
                <footer>
                    <div>
                        <a href="https://www.codewars.com/users/Dawnt" aria-label="CodeWars" target="_blank" rel="noopener noreferrer"><SiCodewars /></a>
                        <a href="https://open.spotify.com/playlist/6eDl0FX1pNcaFXgYIBOobX?si=aewrQ2nJTuSgkMSip3d8-Q&utm_source=copy-link" aria-label="Spotify" target="_blank" rel="noopener noreferrer"><SiSpotify /></a>
                        <a href="https://www.discord.gg/mexicodev" aria-label="Discord" target="_blank" rel="noopener noreferrer"><SiDiscord /></a>
                        <a href="/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
                    </div>
                    <p>&copy; Dawnt 2022</p>
                </footer>
            </aside>
        </>
    );
};