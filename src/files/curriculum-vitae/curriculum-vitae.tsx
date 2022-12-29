import { motion } from "framer-motion";

export default function CurriculumVitae(): JSX.Element {
    return (
        <div id="curriculum-vitae" className="file">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                Curriculum Vitae
            </motion.h1>
            <div className="content">
                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h3>
                <motion.div className="stack"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="item">
                        <div className="title">
                            <h4>Master of Science in Computer Science</h4>
                            <h5>University of Applied Sciences, Kiel</h5>
                        </div>
                        <div className="date">
                            <h5>2019 - 2021</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <h5>University of Applied Sciences, Kiel</h5>
                        </div>
                        <div className="date">
                            <h5>2016 - 2019</h5>
                        </div>
                    </div>
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Work Experience
                </motion.h3>
                <motion.div className="stack"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="item">
                        <div className="title">
                            <h4>Software Developer</h4>
                            <h5>Freelance</h5>
                        </div>
                        <div className="date">
                            <h5>2020 - Present</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <h4>Software Developer</h4>
                            <h5>Freelance</h5>
                        </div>
                        <div className="date">
                            <h5>2020 - Present</h5>
                        </div>
                    </div>
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    Skills
                </motion.h3>
                <motion.div className="stack"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="item">
                        <div className="title">
                            <h4>Programming Languages</h4>
                        </div>
                        <div className="date">
                            <h5>JavaScript, TypeScript, Python, Java, C#, C++, C, PHP, HTML, CSS, SQL</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <h4>Frameworks</h4>
                        </div>
                        <div className="date">
                            <h5>React, Angular, Vue, Node.js, Express.js, Django, Flask, Spring, .NET, Bootstrap, TailwindCSS, jQuery</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <h4>Tools</h4>
                        </div>
                        <div className="date">
                            2020 - Present
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <h4>Other</h4>
                        </div>
                        <div className="date">
                            <h5>Git, Docker, Kubernetes, Linux, Windows, macOS, REST, GraphQL, MongoDB, MySQL, PostgreSQL, Firebase, AWS, GCP, Azure, Jenkins, CI/CD, Agile, Scrum, Kanban</h5>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};