
export const getDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
};