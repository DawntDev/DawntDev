import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import NavBar from "../components/nav-bar";
import { IRouteProps } from "../context/interfaces";
import { particlesConnected } from "../context/particles";
import "../css/about.css";

export default function About(props: IRouteProps) {
    return (
        <>
            <NavBar active={props.path} />
            <div id="About" className="route">
                <div className="header">
                    <Particles id="Particles" options={particlesConnected}/>
                    <h1>About</h1>
                    <div className="info">
                        <p>Hi! my name is</p>
                        <h3>Juan Manuel</h3>
                        <p>I'm a software developer from Mexico.</p>
                    </div>
                </div>
            </div>
        </>
    );
};