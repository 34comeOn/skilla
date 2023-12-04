import { StockSelect } from "../stockSelect"

export const DateSelectHeader = () => {
    return (
        <>
            {<button> prev select</button>}
            {<>date icon</>}
            <StockSelect />
            {<button> next select</button>}
        </>
    )
}