import html from '../core.js';
import ToDoItem from './ToDoItem.js';
import { connect } from '../store.js';

const connector = connect()

function ToDoList({ toDos, filter, filters }) {
    return html`
        <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${toDos.every(filters.completed) && 'checked'}
            />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${toDos
            .filter(filters[filter])
            .map((toDo, index) => ToDoItem({ toDo: toDo, index: index }))}
            </ul >
        </section >
    `
}

export default connector(ToDoList) // ở đây có thể viết connect()(ToDoList)
