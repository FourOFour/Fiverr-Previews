import { createContext, useContext, useState } from "react";
import {
    ToggleBodyProps,
    ToggleButtonProps,
    ToggleContextType,
    ToggleProps,
} from "./toggle.interface";

const ToggleContext = createContext<ToggleContextType | null>(null);

function Toggle(props: ToggleProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <ToggleContext.Provider
                value={{
                    isOpen,
                    setIsOpen,
                    fade: props.fade ? props.fade : (props.fadeTimer ? true : false),
                    fadeTimer: props.fadeTimer ? props.fadeTimer : 2000,
                }}
            >
                {props.children}
            </ToggleContext.Provider>
        </>
    );
}

function ToggleButton(props: ToggleButtonProps) {
    const { isOpen, setIsOpen } = useContext(
        ToggleContext
    ) as ToggleContextType;

    return (
        <>
            <button
                className={props.className}
                onClick={() => setIsOpen(!isOpen)}
            >
                {props.children}
            </button>
        </>
    );
}

function ToggleBody(props: ToggleBodyProps) {
    const { isOpen, setIsOpen, fade, fadeTimer } = useContext(
        ToggleContext
    ) as ToggleContextType;
    let TimeOutTimer = -1;
    function setTimer() {
        if (fade)
            TimeOutTimer = setTimeout(function () {
                setIsOpen(!isOpen);
            }, fadeTimer);
    }

    function resetTimer() {
        if (fade) clearTimeout(TimeOutTimer);
    }

    return (
        <>
            <div onMouseLeave={setTimer} onMouseEnter={resetTimer}>
                {isOpen && props.children}
            </div>
        </>
    );
}

export default Toggle;
export { ToggleButton, ToggleBody };
