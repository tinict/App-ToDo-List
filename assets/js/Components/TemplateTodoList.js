"user strict";

import { Render } from '../core.js';

export const TemplateTodoList = () => {
    return Render`
        <div class="container">
            <div class="app-TodoList">
                <div class="app-TodoList__add">
                    <input type="text" class="app-TodoList__input" placeholder="Nhiệm vụ cần làm ..."></input>
                    <button type="button" class="app-TodoList__btn-Add">Add</button>
                </div>
                <div class="ListTodo">
                    <ul class="container__ListTodo"></ul>
                </div>
            </div>
        </div>
    `;
};

export function ListTodo ([...values]) {
    return values.map((val) => {
        return Render`
            <li class="item">
                <span class="content__ListTodo">${val.content}</span>
            </li>
        `
    }).join('');

};
