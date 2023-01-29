"user strict";

export const Reducer = (state, action) => {
    if(action.type === "ADD_TODO") {
        return [...state, {...action.payload}];
    }
    else if(action.type === "remove")
        remove();
}