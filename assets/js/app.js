"use strict";
import { TemplateTodoList, ListTodo } from "./Components/TemplateTodoList.js";
import { CreateStore } from "./Redux/Store.js";
import { ConfigureStore } from "./Redux/ConfigureStore.js";
import { Reducer } from "./Redux/Reducer.js";

export const {getState, dispatch} = CreateStore();
export const {value} = ConfigureStore().initialState
export const {add, remove} = ConfigureStore().reducers;

const ElementRoot = document.getElementById('root');
ElementRoot.innerHTML = TemplateTodoList();

const ElementButtonAdd = document.querySelector('.app-TodoList__btn-Add');
const ElementInpTodoList = document.querySelector('.app-TodoList__input');

let Store = CreateStore(value, Reducer);

ElementButtonAdd.onclick = () => {
    Store.dispatch(add(ElementInpTodoList.value));
    const ElementListToDo = document.querySelector('.container__ListTodo');
    console.log(Store.getState());
    ElementListToDo.innerHTML = ListTodo(Store.getState());
}





