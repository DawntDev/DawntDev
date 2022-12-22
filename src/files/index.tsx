import { Dispatch, SetStateAction } from "react";
import { ListDirectory, Repository } from "../components";
import AboutMe from "./about-me/about-me";
import TechStack from "./tech-stack/tech-stack";
import ContactMe from "./contact-me/contact-me";

export default function File({ path, callback }: { path: string, callback: Dispatch<SetStateAction<string>> }): JSX.Element {
    let pathArray: string[] = path.split("/");
    if (pathArray[pathArray.length - 1].includes(".")) {
        let file: string = pathArray.at(-1) as string;
        switch (file) {
            case "about-me.md":
                return <AboutMe />
            case "tech-stack.md":
                return <TechStack />
            case "contact-me.md":
                return <ContactMe />
            case "curriculum-vitae.pdf":
                return <div>Curriculum Vitae</div>
            default:
                return <div>File not found</div>
        };
    } else if (pathArray.length > 2) {
        return <Repository name={pathArray.at(-1) as string} />
    } else {
        if (pathArray.length > 1) {
            return <ListDirectory dir={path} callback={callback} key={1}/>
        } else {
            return <ListDirectory dir={path} callback={callback} key={0}/>
        };
    };
};