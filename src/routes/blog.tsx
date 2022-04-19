import React, { useEffect, useState } from "react";
import NavBar from "../components/nav-bar";
import { IRouteProps } from "../context/interfaces";
import "../css/blog.css";

export default function Blog(props: IRouteProps) {
    return (
        <>
            <NavBar active={props.path} />
            <div id="Blog" className="route">
            </div>
        </>
    );
};