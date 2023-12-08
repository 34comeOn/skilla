import { StyledBorderGrade } from "./styledBorderGrade"

type TborderGrade = {
    grade: string,
    color: string,
    backgroundColor: string,
    padding?: string,
}

export const BorderGrade = ({grade, color, backgroundColor, padding}: TborderGrade) => {
    return(
        <StyledBorderGrade color={color} $backgroundColor={backgroundColor} $padding={padding} >
            {grade}
        </StyledBorderGrade >
    )
}