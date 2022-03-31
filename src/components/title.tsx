import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IComponentProps } from "../context/interfaces";
import "../css/title.css"

export default function Title({ active, states }: IComponentProps) { 
    const { value, setter } = states ? { ...states["showMenu"] } : { value: null, setter: () => {} };

    return (
        <div id="Title">
            <HiMenu onClick={(): void => setter(!value)} />
            <h3>{active === "/" ? "Home" : `${active![1].toUpperCase()}${active?.replace("/", "").slice(1)}`}</h3>
        </div>
    );
};