import type { Route } from "./+types/home";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useOutletContext } from "react-router";
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
        <section className="flex flex-col sm:flex-row mt-4 sm:items-center justify-around">
            <div className="w-full sm:w-1/3">
                <Navbar />
            </div>
            <div className="w-full sm:w-2/3">
                <p className="text-base sm:text-lg text-justify mt-8 sm:mt-0 overflow-y-auto max-h-[28rem]">
                    Hello, my name is <strong>Juan Manuel</strong>, also known as <strong>Dawnt</strong> on the internet. I am a passionate Mexican <strong>Software Developer</strong> currently studying at <strong><abbr title="Universidad Nacional Autónoma de México">UNAM</abbr></strong>. I strive to excel in everything I do and always aim to <strong>help others</strong> whenever possible. My love for <strong>solving problems</strong> and <strong>puzzles</strong>, especially those involving <strong>programming</strong>, drives me every day. As an active member of a <strong>developer community</strong>, I am dedicated to promoting programming among young people, assisting them with their questions and challenges in this fascinating world of computers.
                </p>
            </div>
        </section>
    </main>
}
