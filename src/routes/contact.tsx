import React, { useEffect, useState } from "react";
import NavBar from "../components/nav-bar";
import Title from "../components/title";
import { IRouteProps } from "../context/interfaces";
import "../css/contact.css";

export default function Contact(props: IRouteProps) { 
    const { value, setter } = props.menu;

    return (
        <div id="Contact">
            <NavBar active={props.path} />
            <Title active={props.path} states={{ "showMenu": { value: value, setter: setter } }} />
        </div>
    );
};