const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        weekday: 'long',
    };

    return new Date().toLocaleDateString("ru",options)
}

export const formatDate = () => {
    const str = getCurrentDate();
    return `${str.charAt(0).toUpperCase()}${str.slice(1,-1)}`;
}

