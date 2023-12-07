import { ReactNode, useRef, useState } from "react"
import { SelectPopup } from "./selectPopup";
import { StockSelectHeader } from "./selectHeader/stockSelectHeader"
import { useOutsideMouseDown } from "src/myHooks/useOutsideMouseDown";

type TselectData = {
    data: string[] | ReactNode[],
    ishovered?: string,
    isDateSelect?: boolean,
}

export const StockSelect = ({data, ishovered, isDateSelect}: TselectData) => {
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
  
    return (
        <div ref={wrapperRef} style={{position: 'relative'}}>
            <StockSelectHeader isDateSelect={isDateSelect} isParentHovered={ishovered} title={currrentSelectItem} isSelectorOpen={isSelectorOpen} toggleSelectorHandler={toggleSelectorHandler} />
            {isSelectorOpen && <SelectPopup selectList={data} toggleSelectorHandler={toggleSelectorHandler} setTitleHandler={setTitleHandler} />}
        </div>
    )
}