import html from '../core.js';

function Header() {
    return html`
        <header class="header">
            <h1>To do list</h1>
            <input class="new-todo"
                placeholder="What needs to be done?"
                autofocus
                onkeyup="event.keyCode === 13 && dispatch('add', this.value)"
            />
        </header>
    `
}

export default Header
