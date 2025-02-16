import { type Dispatch, type SetStateAction, useEffect } from "react";
import type { Route } from "./+types/contact";
import { useOutletContext } from "react-router";

export default function Contact() {
    const { setCommand } = useOutletContext<{ setCommand: Dispatch<SetStateAction<string>> }>();
    useEffect(() => setCommand("touch ./contact.md"));
    return <h1>Contact</h1>;
}
