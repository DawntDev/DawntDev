import React from "react";
import { useState, useEffect } from "react";
import { IRouteProps } from "../context/interfaces";
import "../css/home.css"
import NavBar from "../components/nav-bar"
import Title from "../components/title"

export default function Home(props: IRouteProps) {
    const { value, setter } = props.menu;

    return (
        <div id="Home">
            <NavBar active={props.path} />
            <Title active={props.path} states={{ "showMenu": { value: value, setter: setter } }} />
        </div>
    );
};