import { IRoot } from "../context/interfaces";
import Home from "./home";
import Projects from "./projects";
import Blog from "./blog";
import Contact from "./contact";
import About from "./about";
import NotFound from "./notFound";

const Root: Array<IRoot> = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/projects",
        element: Projects
    },
    {
        path: "/blog",
        element: Blog
    },
    {
        path: "/contact",
        element: Contact
    },
    {
        path: "/about",
        element: About
    },
    {
        path: "/*",
        element: NotFound
    }
]

export default Root;