let nextTodoId = 0;

export const addTodo = desc =>({

    type:'ADD_TODO',
    id: nextTodoId++,
    desc

})

export const Visibility = filter => ({
    type: 'VISIBILITY',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VISIBILITY_TYPES = {
    ALL: 'SHOW_ALL',
    COMPLETED:'COMPLETED',
    CURRENT:'CURRENT' 
}