"user strict";

export const Render = ([first, ...res], ...values) => {
    return values.reduce((acc, val) => {
        return acc.concat(val, res.shift());
    }, [first]).filter((condition) => {
        return condition !== false && condition !== true && condition !== 0;
    }).join('');
}