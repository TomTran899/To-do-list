const ToDo_Storage_key = 'ToDos'

export default {
    get() {
        return JSON.parse(localStorage.getItem(ToDo_Storage_key)) || []
    },
    set(toDos) {
        localStorage.setItem(ToDo_Storage_key, JSON.stringify(toDos))
    }
}