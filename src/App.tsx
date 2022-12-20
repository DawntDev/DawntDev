import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Display, Input } from "./components";
import File from "./files";


const pathReturn = (path: string): string => path.split("/").slice(0, -1).join("/");

export default function App() {
    const [path, setPath] = useState<string>("home/about-me.md");

    return (
        <div className="App">
            <Display>
                <Input value={path} />
                <File path={path} callback={setPath} />
                {
                    path.split("/").length > 1
                        ? <IoIosArrowBack className="return" onClick={() => setPath(pathReturn(path))} />
                        : <></>
                }
            </Display>
        </div>
    );
}
