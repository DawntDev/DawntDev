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

export default function Navbar({ className }: { className: string }) {
    return (
        <nav className={className}>
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