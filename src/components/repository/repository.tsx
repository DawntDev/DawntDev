import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import gql from "graphql-tag";
import "./repository.css";

type ReadMe = { text: string; byteSize: number; }
type response = {
    user: {
        repository: {
            README: ReadMe;
        };
    };
};

const readMEQuery = (name: string): DocumentNode => gql`
query {
  user(login: "DawntDev") {
    repository(name: "${name}") {
      README: object(expression: "HEAD:README.md") {
        ... on Blob {
          text
          byteSize
        }
      }
    }
  }
}
`;

export default function Repository({ name }: { name: string }): JSX.Element {
    const { loading, error, data } = useQuery<response>(readMEQuery(name));
    const [readme, setReadme] = useState<ReadMe>({ text: "", byteSize: 0 });

    useEffect(() => {
        if (!loading && !error) {
            data && setReadme(data.user.repository.README);
        };

    }, [loading, error, data]);

    return (
        <div id="repository" className="file">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                children={readme.text}
            />

        </div>
    );
};