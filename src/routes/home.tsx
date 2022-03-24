import React from "react";
import { useState, useEffect } from "react";
import { IRouteProps } from "../context/interfaces";
import "../css/home.css"
import NavBar from "../components/nav-bar"

export default function Home(props: IRouteProps) {
    return (
        <div id="Home">
            {props.width >= 425 ? <NavBar theme={props.theme} /> : null}
        </div>
    );
};