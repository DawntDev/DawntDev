import React, { useEffect, useState } from "react";
import { GrHomeRounded, GrCluster, GrBeacon, GrContactInfo } from "react-icons/gr";
import { IComponentProps } from "../context/interfaces";
import "../css/nav-bar.css";


export default function NavBar(props: IComponentProps) {

    return (
        <aside id="NavBar">
            <header>
                <img src="./assets/img/avatar.gif" alt="avatar" />
                <h1>Dawnt</h1>
            </header>
            <nav>
                <ul>
                    <li><a href="/"><div><GrHomeRounded /></div> Home</a></li>
                    <li><a href="./projects"><div><GrCluster /></div> Projects</a></li>
                    <li><a href="./blog"><div><GrBeacon /></div> Blog</a></li>
                    <li><a href="./contact"><div><GrContactInfo /></div> Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
};