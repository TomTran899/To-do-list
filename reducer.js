import storage from "./util/storage.js"

const init = {
    toDos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: toDo => !toDo.completed,
        completed: toDo => toDo.completed
    },
    editIndex: null
}

const actions = {
    add({ toDos }, title) {
        if (title) {
            toDos.push({ title: title, completed: false })
            storage.set(toDos)
        }
    },
    toggle({ toDos }, index) {
        const toDo = toDos[index]
        toDo.completed = !toDo.completed
        storage.set(toDos)
    },
    toggleAll({ toDos }, completed) {
        toDos.forEach(toDo => toDo.completed = completed)
        storage.set(toDos)
    },
    destroy({ toDos }, index) {
        toDos.splice(index, 1)
        storage.set(toDos)
    },
    switchFilter(state, filter) {
        state.filter = filter;
    },
    clearCompleted(state) {
        state.toDos = state.toDos.filter(state.filters.active)
        storage.set(state.toDos)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    endEdit(state, title) {
        if (state.editIndex !== null) {
            state.toDos[state.editIndex].title = title
            state.editIndex = null
            storage.set(state.toDos)
        }
    }
}

export default function reduce(state = init, action, args) {
    actions[action] && actions[action](state, args)
    return state
}
