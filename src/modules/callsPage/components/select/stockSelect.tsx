import { ReactNode} from "react"
import { SelectPopup } from "./selectPopup";
import { StockSelectHeader } from "./selectHeader/stockSelectHeader"
import { useSelect } from "src/myHooks/useSelect";

export type TselectValue = {
    value: string | ReactNode,
    requestValue: string,
}

type TselectData = {
    data: TselectValue[],
    ishovered?: string,
    isDateSelect?: boolean,
}

export const StockSelect = ({data, ishovered, isDateSelect}: TselectData) => {
    const {currrentSelectItem, toggleSelectorHandler, setValueHandler, wrapperRef, isSelectorOpen} = useSelect(data[0]);
  
    return (
        <div ref={wrapperRef} style={{position: 'relative'}}>
            <StockSelectHeader isDateSelect={isDateSelect} isParentHovered={ishovered} value={currrentSelectItem} isSelectorOpen={isSelectorOpen} toggleSelectorHandler={toggleSelectorHandler} />
            {isSelectorOpen && <SelectPopup selectList={data} toggleSelectorHandler={toggleSelectorHandler} setValueHandler={setValueHandler} />}
        </div>
    )
}