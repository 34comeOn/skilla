import {  useRef, useState } from "react"
import { useOutsideMouseDown } from "src/myHooks/useOutsideMouseDown";
import { StockSelectHeader } from "../select/selectHeader/stockSelectHeader";
import { AccountSelectPopup } from "./accountSelectPupup";
import { useAccountStore } from "./store";


export const AccountSelect = () => {
    const accountUser = useAccountStore(state => state.accountUser);
    const [isSelectorOpen, setIsSelectorOpen]=useState(false);

    const toggleSelectorHandler = () => {
        setIsSelectorOpen(!isSelectorOpen)
    }
    const closeSelectorHandler = () => {
        setIsSelectorOpen(false)
    }

    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideMouseDown(wrapperRef, closeSelectorHandler);
  
    return (
        <div ref={wrapperRef} style={{position: 'relative'}}>
            <StockSelectHeader  avatar={accountUser.person_avatar} isSelectorOpen={isSelectorOpen} toggleSelectorHandler={toggleSelectorHandler} />
            {isSelectorOpen && <AccountSelectPopup toggleSelectorHandler={toggleSelectorHandler} />}
        </div>
    )
}