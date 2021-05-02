export const capitelizeString = (string) => {
    return string[0].toUpperCase().concat(string.slice(1).toLowerCase());
};

/**
 * 
 * @param {Number} monthOrder 
 * @returns
 */
export const getDaysInMonth = (month, months) => {
    const currentYear = new Date().getFullYear();
    const selectedMonth = months.find(m => m.name === month);

    if (selectedMonth) {
        return new Date(currentYear, selectedMonth.order, 0).getDate();
    }
};
