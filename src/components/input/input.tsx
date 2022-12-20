import { useState, useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";
import "./input.css";

export default function Input({ value }: { value: string }): JSX.Element {
    const [currently, setCurrently] = useState<string>("home/about-me.md");
    const [toWrite, setToWrite] = useState<string>("home/about-me.md");

    useEffect(() => {
        if (value !== currently) {
            setCurrently(value);
            if (value.length > currently.length) {
                let toAdding: string = value.slice(currently.length);
                for (let i = 0; i < toAdding.length; i++) {
                    setTimeout(() => setToWrite(currently => currently + toAdding[i]), i * 20);
                };
            } else if (value.length < currently.length) {
                let toRemoving: string = currently.slice(value.length);
                for (let i = 0; i < toRemoving.length; i++) {
                    setTimeout(() => setToWrite(currently => currently.slice(0, -1)), i * 20);
                };
            };

        };

    }, [value, currently, toWrite]);

    return (
        <div id="input">
            <BiRightArrow />
            <p>{toWrite}</p>
        </div>
    );
};
