import { SiCodewars, SiDiscord, SiGithub, SiCodepen } from "react-icons/si";
import { IoLocationSharp, IoAt, IoPaperPlane } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./contact-me.css"

export default function ContactMe(): JSX.Element {
    return (
        <div id="contact-me" className="file">
            <h1>Contact Me</h1>
            <div className="container">
                <div className="left">
                    <form action="" method="post">
                        <input
                            type="text" name="name" id="name"
                            placeholder="Name"
                            autoComplete="off" spellCheck="false"
                            required
                        />
                        <input
                            type="email" name="email" id="email"
                            placeholder="Email"
                            autoComplete="off" spellCheck="false"
                            required
                        />
                        <textarea name="messages" id="messages" placeholder="Messages" rows={10} style={{minHeight: "13.125rem"}} required />
                        <button type="submit">
                            <IoPaperPlane />
                            <span>Send</span>
                        </button>
                    </form>
                </div>
                <div className="right">
                    <ul className="contact-list">
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
                    </ul>
                    <hr />
                    <ul className="social-media-list">
                        <li>
                            <a href="https://github.com/DawntDev" target="_blank" rel="noopener noreferrer">
                                <SiGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/mexicodev" target="_blank" rel="noopener noreferrer">
                                <SiDiscord />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.codewars.com/users/Dawnt" target="_blank" rel="noopener noreferrer">
                                <SiCodewars />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/DawntDev" target="_blank" rel="noopener noreferrer">
                                <SiCodepen />
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="copyright">&copy; 2023 - DawntDev</div>
                </div>
            </div>
        </div>
    );
};
