import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { LedCard } from "../../components/cards/cards";
import "./not-found.css";

export default function NotFound() {
    const location: string = useLocation().pathname;

    return (
        <div id="NotFound" className="route">
            <LedCard>
                <div className="body">
                    <h5>404 Error</h5>
                    <p>The page you are looking for, <span>{location}</span>, does not exist.</p>
                </div>
                <div className="footer">
                    <NavLink to="/">Go to Home</NavLink>
                </div>
            </LedCard>
        </div >
    );
};