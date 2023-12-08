import { useRef, useState } from "react";
import { TselectValue } from "src/modules/callsPage/components/select/stockSelect";
import { useOutsideMouseDown } from "./useOutsideMouseDown";

export const useSelect = (data: TselectValue) => {
    const [currrentSelectItem, setCurrrentSelectItem]=useState(data);
    const [isSelectorOpen, setIsSelectorOpen]=useState(false);

    const toggleSelectorHandler = () => {
        setIsSelectorOpen(!isSelectorOpen)
    }
    const closeSelectorHandler = () => {
        setIsSelectorOpen(false)
    }

    const setValueHandler = (value: TselectValue) => {
        setCurrrentSelectItem(value)
    }

    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideMouseDown(wrapperRef, closeSelectorHandler);
    
    return {currrentSelectItem, toggleSelectorHandler, setValueHandler, wrapperRef, isSelectorOpen}
}