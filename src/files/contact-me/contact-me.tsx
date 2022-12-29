import { SiCodewars, SiDiscord, SiGithub, SiCodepen } from "react-icons/si";
import { IoLocationSharp, IoAt, IoPaperPlane } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./contact-me.css"

export default function ContactMe(): JSX.Element {
    return (
        <div id="contact-me" className="file">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                Contact Me
            </motion.h1>
            <div className="container">
                <div className="left">
                    <form action="" method="post">
                        <motion.input
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.35 }}
                            type="text" name="name" id="name"
                            placeholder="Name"
                            autoComplete="off" spellCheck="false"
                            required
                        />
                        <motion.input
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.35 }}
                            type="email" name="email" id="email"
                            placeholder="Email"
                            autoComplete="off" spellCheck="false"
                            required
                        />
                        <motion.textarea
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.35 }}
                            name="messages" id="message" placeholder="Message"
                            rows={10} style={{ minHeight: "13.125rem" }}
                            required
                        />
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.35 }}
                            type="submit"
                        >
                            <IoPaperPlane />
                            <span>Send</span>
                        </motion.button>
                    </form>
                </div>
                <div className="right">
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.35 }}
                        className="contact-list"
                    >
                        <li>
                            <IoLocationSharp />
                            <span> CDMX, México</span>
                        </li>
                        <li>
                            <BsFillTelephoneFill />
                            <span> UNKNOWN</span>
                        </li>
                        <li>
                            <IoAt />
                            <span>
                                <a href="mailto:jmanuelhv9@gmail.com" title="Send me an email">jmanuelhv9@gmail.com</a>
                            </span>
                        </li>
                    </motion.ul>
                    <motion.hr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.75, duration: 0.35 }}
                    />
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.35 }}
                        className="social-media-list"
                    >
                        <li>
                            <motion.a
                                whileHover={{ boxShadow: "0 0 0 3px #3b50ce, 0 0 0 5px #000" }}
                                href="https://github.com/DawntDev" target="_blank" rel="noopener noreferrer"
                            >
                                <SiGithub />
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                whileHover={{ boxShadow: "0 0 0 3px #3b50ce, 0 0 0 5px #000" }}
                                href="https://discord.gg/mexicodev" target="_blank" rel="noopener noreferrer">
                                <SiDiscord />
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                whileHover={{ boxShadow: "0 0 0 3px #3b50ce, 0 0 0 5px #000" }}
                                href="https://www.codewars.com/users/Dawnt" target="_blank" rel="noopener noreferrer">
                                <SiCodewars />
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                whileHover={{ boxShadow: "0 0 0 3px #3b50ce, 0 0 0 5px #000" }}
                                href="https://codepen.io/DawntDev" target="_blank" rel="noopener noreferrer">
                                <SiCodepen />
                            </motion.a>
                        </li>
                    </motion.ul>
                    <motion.hr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.75, duration: 0.35 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.35 }}
                        className="copyright"
                    >
                        &copy; 2022 - DawntDev
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
