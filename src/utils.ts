import { TOKEN } from "./constants";
import { TallAccauntData } from "./modules/callsPage/components/accountSelect/accountSelectPupup";

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

export const sortByTheRoles = (unsortedData: TallAccauntData) => {
    const dataSortedByRoles = [];

    for (let person of unsortedData) {
        const existingRoleIndex = dataSortedByRoles.findIndex(sortedItem => sortedItem.role === person.person_role);
        if (existingRoleIndex >= 0) {
            dataSortedByRoles[existingRoleIndex].rolePersons.push(person);
        } else {
            dataSortedByRoles.push(
                {
                    role: person.person_role,
                    rolePersons: [person]
                }
            )
        }
    }
    return dataSortedByRoles
}

const options = {
    method: 'POST',
    headers: {'Authorization': `Bearer ${TOKEN}`}
}

export const fetchCalls = async (callType: string) => {
    const res = await fetch(`https://api.skilla.ru/mango/getList?date_start=2023-11-29&date_end=2023-11-30${callType}`, options)
    return res.json();
}