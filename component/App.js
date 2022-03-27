import html from '../core.js';
import { connect } from '../store.js';
import Header from './Header.js';
import ToDoList from './ToDoList.js';
import Footer from './Footer.js';


function App({ toDos }) {
    return html`
        <section class="toDoApp">
            ${Header()}
            ${toDos.length > 0 && ToDoList()}
            ${toDos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(App)
