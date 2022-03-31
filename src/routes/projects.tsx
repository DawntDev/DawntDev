import React, { useEffect, useState } from "react";
import NavBar from "../components/nav-bar";
import Title from "../components/title";
import { IRouteProps } from "../context/interfaces";
import "../css/projects.css";

export default function Projects(props: IRouteProps) { 
    const { value, setter } = props.menu;

    return (
        <div id="Projects">
            <NavBar active={props.path} />
            <Title active={props.path} states={{ "showMenu": { value: value, setter: setter } }} />
        </div>
    );
};