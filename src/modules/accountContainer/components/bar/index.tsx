import { StyledBackgroundBar } from "./styledBackgroundBar"
import { StyledBar } from "./styledBar"

export const Bar = ({progressRatio, resultColor}: {progressRatio: number, resultColor:string}) => {
    return(
        <>
            <StyledBackgroundBar />
            <StyledBar progressRatio={progressRatio} resultColor={resultColor} />
        </>
    )
}