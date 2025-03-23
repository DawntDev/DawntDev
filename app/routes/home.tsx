import type { Route } from "./+types/home";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useOutletContext } from "react-router";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram, AiFillSpotify
} from "react-icons/ai";
import { Navbar } from "~/components";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    const { setCommand } = useOutletContext<{ setCommand: Dispatch<SetStateAction<string>> }>()
    useEffect(() => setCommand("touch ./about-me.md"));

    return <main>
        <header>
            <h1 className="font-extralight text-3xl xl:text-6xl -ml-[0.15rem]">Juan Manuel</h1>
            <h3 className="font-normal text-xs">Software Developer</h3>
        </header>
        <section className="flex flex-col sm:flex-row mt-4 sm:items-center justify-around flex-wrap">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <Navbar className="w-full mb-2" />
            </div>
            <div className="w-full sm:w-2/3 overflow-y-auto lg:overflow-y-hidden max-h-[28rem] md:max-h-[33rem] pr-2">
                <h2 className="text-4xl font-light">Who I am?</h2>
                <p className="text-base sm:text-lg text-justify mt-4 sm:mt-0">
                    Hello, my name is <strong>Juan Manuel</strong>, also known as <strong>Dawnt</strong> on the internet. I am a passionate Mexican <strong>Software Developer</strong> currently studying at <strong><abbr title="Universidad Nacional Autónoma de México">UNAM</abbr></strong>. I strive to excel in everything I do and always aim to <strong>help others</strong> whenever possible. My love for <strong>solving problems</strong> and <strong>puzzles</strong>, especially those involving <strong>programming</strong>, drives me every day. As an active member of a <strong>developer community</strong>, I am dedicated to promoting programming among young people, assisting them with their questions and challenges in this fascinating world of computers.
                </p>
                <div className="flex flex-row w-full justify-start mt-4 mb-8 items-center gap-x-4">
                    <a href="https://github.com/DawntDev" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform ease-out">
                        <AiFillGithub id="github" className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/juan-manuel-h-823274346/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform ease-out">
                        <AiFillLinkedin id="linkedin" className="w-8 h-8" />
                    </a>

                    <a href="https://www.instagram.com/dawntdev" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform ease-out">
                        <AiFillInstagram id="instagram" className="w-8 h-8" />
                    </a>
                    <a href="https://open.spotify.com/user/jmanuelhv9?si=48fa758aa0b34529" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform ease-out">
                        <AiFillSpotify id="spotify" className="w-8 h-8" />
                    </a>
                </div>
                <h3 className="text-4xl font-light mb-4">Member of</h3>
                <div className="w-full flex flex-col sm:flex-row justify-around items-center gap-y-8 sm:gap-0">
                    <a href="https://mexicodev.org/" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden outline outline-neutral-950">
                                <img
                                    src="./img/mexicodev.webp"
                                    alt="MexicoDev"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h5 className="font-bold mt-2 text-lg">MexicoDev</h5>
                        </div>
                    </a>
                    <a href="https://unam.pro/" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-28 h-24 overflow-hidden">
                                <img
                                    src="./img/motorsports.webp"
                                    alt="UNAM Motorsports"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h5 className="font-bold mt-2 text-lg">UNAM Motorsports</h5>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </main>
}
