import html from '../core.js';
import { connect } from '../store.js'

function ToDoItem({ toDo, index, editIndex }) {
    return html`
        <li 
            class="${toDo.completed && 'completed'} ${editIndex === index && "editing"}">
            <div class="view">
                <input 
                    class="toggle"
                    type="checkbox"
                    ${toDo.completed && 'checked'}
                    onchange="dispatch('toggle', ${index})"
                />
                <label ondblclick="dispatch('startEdit', ${index})">${toDo.title}</label>
                <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
            </div>
            <input 
                class="edit"
                value=${toDo.title}
                onkeyup="event.keyCode===13 && dispatch('endEdit',this.value.trim())"
                onblur="dispatch('endEdit', this.value.trim())"
            />
        </li>
    `
}

export default connect()(ToDoItem)
