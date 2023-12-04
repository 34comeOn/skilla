import { useState } from "react"
import { StockSelectHeader } from "./selectHeader/stockSelectHeader"

export const StockSelect = () => {
    const [selectPayload, setSelectPayload]=useState('Popup array[0]');
    const [isSelectorOpen, setIsSelectorOpen]=useState(false);

    const openSelectorHandler = () => {
        setIsSelectorOpen(!isSelectorOpen)
    }

    return (
        <>
            <StockSelectHeader isSelectorOpen={isSelectorOpen} openSelectorHandler={openSelectorHandler} />
            {isSelectorOpen && <div style={{width: '5px', height: '5px', backgroundColor: 'red'}}></div>}
            {/* <>SelectPopup Array string\ReactNode</> */}
        </>
    )
}