import { TnavigationItem } from "src/constants"
import { StyledNavigationItem } from "./styledNavigationItem"

export const NavigationTitle = ({navData}: {navData:TnavigationItem}) => {
    return(
        <StyledNavigationItem $active={navData.isActive} href={navData.url}>{navData.title}</StyledNavigationItem>
    )
}