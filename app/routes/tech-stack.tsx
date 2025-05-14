import { useOutletContext } from "react-router";
import { type Dispatch, type SetStateAction, useEffect } from "react";
import { Navbar } from "~/components";

export default function TechStack() {
    const { setCommand } = useOutletContext<{ setCommand: Dispatch<SetStateAction<string>> }>();
    useEffect(() => setCommand("touch ./tech-stack.md"));

    return <main>
        <Navbar className=""/>
    </main>;
}