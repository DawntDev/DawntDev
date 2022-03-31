import React, { useEffect, useState } from "react";
import NavBar from "../components/nav-bar";
import Title from "../components/title";
import { IRouteProps } from "../context/interfaces";
import "../css/about.css";

export default function About(props: IRouteProps) { 
    const { value, setter } = props.menu;

    return (
        <div id="About">
            <NavBar active={props.path} />
            <Title active={props.path} states={{ "showMenu": { value: value, setter: setter } }} />
        </div>
    );
};