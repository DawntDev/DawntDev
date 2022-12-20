import { Dispatch, SetStateAction } from "react";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import gql from "graphql-tag";
import "./list-directory.css";

const githubQuery = gql`
    query {
        user(login: "DawntDev") {
            repositories(first: 100) {
                nodes { name }
            }
        }
    }
`;

export default function ListDirectory({ dir, callback }: { dir: string, callback: Dispatch<SetStateAction<string>> }): JSX.Element {
    const DIR: { [key: string]: string[] } = {
        "home": ["about-me.md", "tech-stack.md", "projects", "contact-me.md", "curriculum-vitae.pdf"],
        "home/projects": useQuery(githubQuery).data?.user.repositories.nodes.map((repo: any) => repo.name),
    };

    const components: string[] = DIR[dir];
    return (
        <div className="file-list">
            <ul>
                {
                    components.map(
                        (component, index) => {
                            return (<li key={index}>
                                <motion.button
                                    className="file"
                                    onClick={callback.bind(null, `${dir}/${component}`)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {component}
                                </motion.button>
                            </li>)
                        }
                    )
                }
            </ul>
        </div>
    );
};