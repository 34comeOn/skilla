import { ReactNode} from "react"
import { SelectPopup } from "./selectPopup";
import { StockSelectHeader } from "./selectHeader/stockSelectHeader"
import { useSelect } from "src/myHooks/useSelect";

type TselectData = {
    data: string[] | ReactNode[],
    ishovered?: string,
    isDateSelect?: boolean,
}

export const StockSelect = ({data, ishovered, isDateSelect}: TselectData) => {
    const {currrentSelectItem, toggleSelectorHandler, setTitleHandler, wrapperRef, isSelectorOpen} = useSelect(data);
  
    return (
        <div ref={wrapperRef} style={{position: 'relative'}}>
            <StockSelectHeader isDateSelect={isDateSelect} isParentHovered={ishovered} title={currrentSelectItem} isSelectorOpen={isSelectorOpen} toggleSelectorHandler={toggleSelectorHandler} />
            {isSelectorOpen && <SelectPopup selectList={data} toggleSelectorHandler={toggleSelectorHandler} setTitleHandler={setTitleHandler} />}
        </div>
    )
}