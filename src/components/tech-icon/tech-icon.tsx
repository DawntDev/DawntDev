import { createElement } from "react";
import { IconType } from "react-icons/lib";
import "./tech-icon.css";

type HEX = `#${string}`
const fill = (color: HEX): HEX => {
    let values: Set<string> = new Set(color.slice(1));

    if (values.size === 1) {
        return values.has("0") ? "#ffffff" : "#000000";
    };
    return color;
};


export default function TechIcon({ name, color, icon }: { name: string, color: HEX, icon: IconType | (() => JSX.Element) }): JSX.Element {
    return (
        <div className="tech-icon" style={{ backgroundColor: (color + "33") }} data-name={name}>
            {createElement(icon, { fill: fill(color) })}
        </div>
    );
};
