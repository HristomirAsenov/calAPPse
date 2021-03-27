import { MONTHS } from 'globalConstants';

export const capitelizeString = (string) => {
    return string[0].toUpperCase().concat(string.slice(1).toLowerCase());
};

/**
 * 
 * @param {Number} monthOrder 
 * @returns
 */
export const getDaysInMonth = (month) => {
    const selectedMonth = MONTHS.find(m => m.name === month);

    if (selectedMonth) {
        return new Date(2021, selectedMonth.order, 0).getDate();
    }
};
