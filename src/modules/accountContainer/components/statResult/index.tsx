import { StyledStatResult } from "./styledStatResult"

export const StatResult = ({result, resultColor}: {result:string, resultColor: string}) => {
    return(
        <StyledStatResult resultColor={resultColor}>
            {result}
        </StyledStatResult>
    )
}