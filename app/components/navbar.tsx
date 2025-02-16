import { NavLink } from "react-router";
import routes from "~/routes";


const transformPath = (path: string | undefined): string => {
    if (!path) {
        return "about-me.md"
    } else if (path !== "projects") {
        return path + ".md"
    } else {
        return path
    }
}

export default function Navbar() {
    return (
        <nav className="w-full">
            <ul>
                {routes.map((el, i) => <li key={i}>
                    <NavLink
                        to={`/${el.path || ""}`}
                    > {transformPath(el.path)}
                    </NavLink>
                </li>)}
            </ul>
        </nav>
    );
}