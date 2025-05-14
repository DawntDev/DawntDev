import type { Route } from "./+types/trajectory";
import { useOutletContext } from "react-router";
import { type Dispatch, type SetStateAction, useEffect } from "react";

export default function Trajectory() {
    const { setCommand } = useOutletContext<{ setCommand: Dispatch<SetStateAction<string>> }>();
    useEffect(() => setCommand("python trajectory.py"));

    return <h1>Trajectory</h1>;
}
