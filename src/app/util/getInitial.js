// utils/getInitials.js
export const getInitial = (name) => {
    if (!name) return '';

    const nameArray = name.trim().split(' ');
    const initials = nameArray.map(word => word[0].toUpperCase()).join('');
    return initials;
};
