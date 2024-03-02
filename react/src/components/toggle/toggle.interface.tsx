import { Dispatch, SetStateAction } from "react"

export interface ToggleProps {
    children?: React.ReactNode,
    fade?: boolean,
    fadeTimer?: number 
}
export interface ToggleContextType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
    fade: boolean,
    fadeTimer: number
}
export interface ToggleButtonProps {
    children?: React.ReactNode,
    className?: string    
}
export interface ToggleBodyProps {
    children?: React.ReactNode
}