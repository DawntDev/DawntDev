import React, { useEffect, useState } from "react";
import { IRepo } from "../context/interfaces";
import "../css/repo.css"

export default function Repo(props: IRepo) { 
    return (
        <div className="repo">
            <img src={props.img} alt="banner" />
            <div className="info">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className="language">
                </div>
            </div>
        </div>
    )
};

 