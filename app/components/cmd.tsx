import { useEffect, useState } from "react";

export default function Cmd({ command }: { command: string }) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [writing, setWriting] = useState<boolean>(false);
    const [deleting, setDeleting] = useState<boolean>(false);

    useEffect(() => {
        if (displayedText !== command && !writing && !deleting) {
            const timeouts: NodeJS.Timeout[] = [];
            const clearAllTimeouts = () => timeouts.forEach(clearTimeout);

            const typeText = (text: string, delay: number) => {
                for (let i = 0; i <= text.length; i++) {
                    timeouts.push(setTimeout(() => {
                        setDisplayedText(prev => prev + (text[i] || ""));
                        if (i === text.length) {
                            setWriting(false);
                            clearAllTimeouts();
                        }
                    }, delay * i));
                }
            };

            const deleteText = (length: number, delay: number) => {
                for (let i = 0; i <= length; i++) {
                    timeouts.push(setTimeout(() => {
                        setDisplayedText(prev => prev.slice(0, -1));
                        if (i === length) {
                            setDeleting(false);
                            clearAllTimeouts();
                        }
                    }, delay * i));
                }
            };

            const inCommon = getCommonPrefixLength(displayedText, command);

            if (!displayedText) {
                // Typing All
                // console.log("Typing All", command, displayedText);
                setWriting(true);
                typeText(command, 20);
            } else if (displayedText[0] !== command[0]) {
                // Erased All
                // console.log("Erased All", command, displayedText);
                setDeleting(true);
                deleteText(displayedText.length, 20);
            } else if (displayedText !== command.slice(0, inCommon)) {
                //Erased Common
                // console.log("Erased Common", inCommon, command, displayedText);
                setDeleting(true);
                deleteText(displayedText.length - inCommon, 20);
            } else if (displayedText !== command) {
                // Typing Remaining
                // console.log("Typing Remaining", command.length - displayedText.length, command, command.length, displayedText, displayedText.length);
                setWriting(true);
                typeText(command.slice(displayedText.length), 20);
            }
        }
    }, [command, displayedText, writing, deleting]);

    return (
        <div className="before:content-['▶'] before:mr-2 mb-4">
            <span className="font-semibold">{displayedText.split(" ")[0]} </span>{displayedText.split(" ")[1] || ""}
        </div>
    );
}


function getCommonPrefixLength(text1: string, text2: string): number {
    let length = 0;
    while (length < text1.length && length < text2.length && text1[length] === text2[length]) {
        length++;
    }
    return length;
}