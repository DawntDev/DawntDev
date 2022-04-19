import React, { useEffect, useState } from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import NavBar from "../components/nav-bar";
import Repo from "../components/repo";
import { IRouteProps } from "../context/interfaces";
import "../css/projects.css";

const repoQuery = gql`
    query {
        user(login: "DawntDev") {
            repositories(first: 100) {
                nodes {
                    name
                    description
                    url
                    openGraphImageUrl
                    forkCount
                    stargazerCount
                    languages(first: 100) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }
`;

export default function Projects(props: IRouteProps) {
    const [repos, setRepos] = useState<Array<object>>([]);
    const { loading, error, data } = useQuery<any>(repoQuery);
    
    useEffect(() => { 
        if (!loading && !error) {
            for (const repo of data.user.repositories.nodes) {
                setRepos(repos => [...repos, {
                    name: repo.name,
                    description: repo.description,
                    url: repo.url,
                    openGraphImageUrl: repo.openGraphImageUrl,
                    forkCount: repo.forkCount,
                    stargazerCount: repo.stargazerCount,
                    languages: [...repo.languages.nodes.map((language:{name:string}) => language.name)]
                }]);
            };
        };
    }, [loading, error, data]);
    
    return (
        <>
            <NavBar active={props.path} />
            <div id="Projects" className="route">
                <div className="projects-container">
                    {
                        repos.map(
                            (repo: any, index: number) => (
                                <Repo key={index}
                                    name={repo.name}
                                    description={repo.description}
                                    url={repo.url}
                                    img={repo.openGraphImageUrl}
                                    stars={repo.stargazerCount}
                                    forks={repo.forkCount}
                                    languages={repo.languages}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
};