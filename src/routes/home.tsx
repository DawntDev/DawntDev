import React, { useState, useEffect } from "react";
import { IRouteProps } from "../context/interfaces";
import "../css/home.css";
import NavBar from "../components/nav-bar";

export default function Home(props: IRouteProps) {
    return (
        <>
            <NavBar active={props.path} />
            <div id="Home" className="route">
            </div>
        </>
    );
};