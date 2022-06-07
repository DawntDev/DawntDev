import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./not-found.css";

export default function NotFound() {
    const location: string = useLocation().pathname;

    return (
        <div id="NotFound" className="route">
            <div className="led">
                <div className="panel">
                    <h5>404 Error</h5>
                    <p>The page you are looking for, <span>{location}</span>, does not exist.</p>
                    <NavLink to="/">Go to Home</NavLink>
                </div>
            </div>
        </div>
    );
};