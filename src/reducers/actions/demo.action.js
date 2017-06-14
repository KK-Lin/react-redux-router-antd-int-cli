let nextTodoId = 0
export const addDemo = (text) => {
    return {
        type: 'ADD_TODO',

        text
    }
}