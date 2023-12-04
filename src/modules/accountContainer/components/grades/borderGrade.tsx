import { StyledBorderGrade } from "./styledBorderGrade"

type TborderGrade = {
    grade: string,
    color: string,
    backgroundColor: string,
}

export const BorderGrade = ({grade, color, backgroundColor}: TborderGrade) => {
    return(
        <StyledBorderGrade color={color} $backgroundColor={backgroundColor} >
            {grade}
        </StyledBorderGrade >
    )
}