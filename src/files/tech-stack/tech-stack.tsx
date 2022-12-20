import "./tech-stack.css";

export default function TechStack(): JSX.Element {
    return (
        <div id="tech-stack" className="file">
            <h1>Tech Stack</h1>
            <div className="content">
                <h3>Languages</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>Kotlin</li>
                    <li>C#</li>
                    <li>R</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <h3>Frameworks</h3>
                <ul>
                    <li>React</li>
                    <li>Express</li>
                    <li>Flask</li>
                    <li>GraphQL</li>
                    <li>JetPack</li>
                </ul>
                <h3>Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>Visual Studio</li>
                    <li>Android Studio</li>
                    <li>VS Code</li>
                    <li>Vim</li>
                    <li>Postman</li>
                    <li>npm</li>
                    <li>pip</li>
                </ul>
            </div>
        </div>
    );
};