"use strict";

export const ConfigureStore = () => {
    return {
        name: 'TodoList',
        initialState: {
            value: []
        },
        reducers: {
            add (text) {
                return {
                    type: 'ADD_TODO',
                    payload: {
                        content: text
                    }
                }
            },
            remove (state) {
                console.log("Remove thành công");
            }
        }
    } 
};
