import { useOutletContext } from "react-router";
import { type Dispatch, type SetStateAction, useEffect } from "react";

export default function TechStack() {
    const { setCommand } = useOutletContext<{ setCommand: Dispatch<SetStateAction<string>> }>();
        useEffect(() => setCommand("touch ./tech-stack.md"));
    
    return <h1>TechStack</h1>;
}