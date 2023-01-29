"use strict";

export const CreateStore = (Initial, Reducer) => {
    //Chứa 1 biến trạng thái (state)
    let state = Initial;

    //Trả về 1 object {dispatch, getState}
    return {
        getState () {
            return state;
        },
        dispatch (action) {
            state = Reducer(state, action);
        }
    }
};
