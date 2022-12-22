import { SiCodewars, SiSpotify, SiDiscord, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";
import "./about-me.css";

export default function AboutMe(): JSX.Element {
    return (
        <div id="about-me" className="file">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                About Me
            </motion.h1>
            <div className="content">
                <div className="left">
                    <motion.img
                        src="https://avatars.githubusercontent.com/u/65832744?v=4" alt="Profile"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        width="160px" height="160px"
                    />
                    <div className="social">
                        <motion.a
                            href="https://www.codewars.com/users/Dawnt"
                            aria-label="CodeWars" target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                        >
                            <SiCodewars />
                        </motion.a>
                        <motion.a
                            href="https://open.spotify.com/playlist/6eDl0FX1pNcaFXgYIBOobX?si=aewrQ2nJTuSgkMSip3d8-Q&utm_source=copy-link"
                            aria-label="Spotify" target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                        >
                            <SiSpotify />
                        </motion.a>
                        <motion.a
                            href="https://www.discord.gg/mexicodev"
                            aria-label="Discord" target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                        >
                            <SiDiscord />
                        </motion.a>
                        <motion.a
                            href="/"
                            aria-label="LinkedIn" target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                        >
                            <SiLinkedin />
                        </motion.a>
                    </div>
                </div>
                <div className="right">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                    >
                        Hello my name is Juan Manuel, I am a Mexican Software Developer, I am currently studying at UNAM. I am a very passionate person who always seeks to do things in the best way, I also try to help as long as it is within my possibilities. I love to solve problems and puzzles, especially if they involve programming.
                        I am currently part of a community of developers whose mission is to promote programming in young people, helping them to solve doubts and problems they have related to this great world of computers.
                    </motion.p>
                </div>
            </div>

        </div>
    );
};