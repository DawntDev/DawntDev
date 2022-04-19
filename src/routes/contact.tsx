import React, { useEffect, useState } from "react";
import NavBar from "../components/nav-bar";
import { IRouteProps } from "../context/interfaces";
import "../css/contact.css";

export default function Contact(props: IRouteProps) { 
    return (
        <>
            <NavBar active={props.path} />
            <div id="Contact" className="route">
            </div>
        </>
    );
};