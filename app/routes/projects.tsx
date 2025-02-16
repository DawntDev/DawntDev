import { useOutletContext } from "react-router";

import { type Dispatch, type SetStateAction, useEffect } from "react";

export default function Projects() {
    const { setCommand } = useOutletContext<{ setCommand: Dispatch<SetStateAction<string>> }>();
    useEffect(() => setCommand("touch ./projects/manga-reader.md"));

    return <h1>Projects</h1>;
}
