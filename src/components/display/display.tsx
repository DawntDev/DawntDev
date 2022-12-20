import "./display.css";

export default function Display({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
    return (
        <div id="display">
            {children}
        </div>
    );
};
