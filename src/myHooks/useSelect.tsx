import { ReactNode, useRef, useState } from "react";
import { useOutsideMouseDown } from "./useOutsideMouseDown";

export const useSelect = (data: string[] | ReactNode[]) => {
    const [currrentSelectItem, setCurrrentSelectItem]=useState(data[0]);
    const [isSelectorOpen, setIsSelectorOpen]=useState(false);

    const toggleSelectorHandler = () => {
        setIsSelectorOpen(!isSelectorOpen)
    }
    const closeSelectorHandler = () => {
        setIsSelectorOpen(false)
    }

    const setTitleHandler = (title: string| ReactNode) => {
        setCurrrentSelectItem(title)
    }

    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideMouseDown(wrapperRef, closeSelectorHandler);
    
    return {currrentSelectItem, toggleSelectorHandler, setTitleHandler, wrapperRef, isSelectorOpen}
}