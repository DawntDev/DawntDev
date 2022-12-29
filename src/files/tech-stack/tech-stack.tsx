import {
    SiJavascript, SiTypescript, SiPython, SiKotlin, SiCsharp, SiR, SiHtml5, SiCss3,
    SiReact, SiFlask, SiGraphql,
    SiGit, SiVisualstudiocode, SiAndroidstudio, SiVim, SiPostman, SiNpm, SiPypi, SiVisualstudio
} from "react-icons/si";
import JetPack from "../../assets/icons/jetpack-compose.png";
import NumPy from "../../assets/icons/numpy.png";
import { TechIcon } from "../../components";
import { motion } from "framer-motion";
import "./tech-stack.css";

export default function TechStack(): JSX.Element {
    return (
        <div id="tech-stack" className="file">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                Tech-Stack
            </motion.h1>
            <div className="content">
                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Languages
                </motion.h3>
                <motion.div className="stack"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <TechIcon name="HTML" color="#e34c26" icon={SiHtml5} />
                    <TechIcon name="CSS" color="#264de4" icon={SiCss3} />
                    <TechIcon name="JS" color="#f2cb00" icon={SiJavascript} />
                    <TechIcon name="TS" color="#0074c2" icon={SiTypescript} />
                    <TechIcon name="Python" color="#3776ab" icon={SiPython} />
                    <TechIcon name="Kotlin" color="#B125EA" icon={SiKotlin} />
                    <TechIcon name="C#" color="#239120" icon={SiCsharp} />
                    <TechIcon name="GraphQL" color="#e10098" icon={SiGraphql} />
                    <TechIcon name="R" color="#276dc3" icon={SiR} />
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Frameworks & Libraries
                </motion.h3>
                <motion.div className="stack"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <TechIcon name="React" color="#61dafb" icon={SiReact} />
                    <TechIcon name="Flask" color="#000000" icon={SiFlask} />
                    <TechIcon name="JetPack" color="#1a237e" icon={() => <img src={JetPack} alt="JetPack" width="42px" />} />
                    <TechIcon name="NumPy" color="#4c76cf" icon={() => <img src={NumPy} alt="NumPy" width="42px" />} />
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Tools
                </motion.h3>
                <motion.div className="stack"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <TechIcon name="Git" color="#f05032" icon={SiGit} />
                    <TechIcon name="Visual Studio" color="#5c2d91" icon={SiVisualstudio} />
                    <TechIcon name="VS Code" color="#007acc" icon={SiVisualstudiocode} />
                    <TechIcon name="Android Studio" color="#3ddc84" icon={SiAndroidstudio} />
                    <TechIcon name="Vim" color="#019733" icon={SiVim} />
                    <TechIcon name="Postman" color="#ff6c37" icon={SiPostman} />
                    <TechIcon name="npm" color="#cb3837" icon={SiNpm} />
                    <TechIcon name="pip" color="#1a75ff" icon={SiPypi} />
                </motion.div>
            </div>
        </div>
    );
};
