import { useOutletContext } from "react-router";
import type { Route } from "./+types/info";
import { type Dispatch, type SetStateAction, useEffect } from "react";

export default function Info() {
    const { setCommand } = useOutletContext<{ setCommand: Dispatch<SetStateAction<string>> }>();
    useEffect(() => setCommand("cd ./info.md"));

    return <h1>Info</h1>;
}
