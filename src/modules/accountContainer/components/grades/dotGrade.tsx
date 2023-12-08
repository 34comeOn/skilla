import { StyledDotGrade } from "./styledDotGrade"

export const DotGrade = ({backgroundColor}: {backgroundColor: string,}) => {
    return(
        <StyledDotGrade $backgroundColor={backgroundColor} />
    )
}