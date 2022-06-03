import { IRoot } from "../context/interfaces";
import Home from "./home/home";
import Projects from "./projects/projects";
import Blog from "./blog/blog";
import Contact from "./contact/contact";
import About from "./about/about";
import NotFound from "./not-found/not-found";

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