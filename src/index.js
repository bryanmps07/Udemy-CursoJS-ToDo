import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
// console.time('for')
todoList.todos.forEach( crearTodoHtml );
// console.timeEnd('for')
// console.time('map')
// todoList.todos.map( crearTodoHtml );
// console.timeEnd('map')


// const tarea = new Todo('Aprender Javascritp!!');
// todoList.nuevoTodo( tarea );

// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key','ABC1234');
// sessionStorage.setItem('mi-key','ABC1234');

// setTimeout(() => {
//     localStorage.removeItem();
// }, 1500);