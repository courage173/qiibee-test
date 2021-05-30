export const randomNumberGenerator = length => {
    if (length > 10) {
        length = 10;
    }
    const arr = [];
    for (let i = 0; i < length; i++) {
        const rand = Math.floor(Math.random() * 9) + 1;
        if (arr.includes(rand)) {
            return randomNumberGenerator(length);
        } else {
            arr.push(rand);
        }
    }
    return arr;
};
export const generateId = () => {
    return Math.floor(Math.random() * 9) + 10;
};
