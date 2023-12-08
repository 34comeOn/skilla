import { useState } from "react";

export const useCheckboxHover = () => {
    const [ishovered, setIsHovered] = useState('');

    const setHoverHandler = () => {
        setIsHovered('true')
    }
    const unhoverHandler = () => {
        setIsHovered('')
    }

    return {ishovered, setHoverHandler, unhoverHandler}
}