import { useState } from "react";

export const useHover = () => {
    const [ishovered, setIsHovered] = useState('');

    const onMouseEnter = () => setIsHovered('true');
    const onMouseLeave = () => setIsHovered('');

    return {ishovered, onMouseEnter, onMouseLeave}
}