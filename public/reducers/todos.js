const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

      case 'DELETE_TODO':
    return state.filter(todo => todo.id !== action.id);

      case 'EDIT_TODO' : {
          return state.map(todo => {
            if (todo.id === action.id) {
              todo = Object.assign({}, todo, {text : action.text})
              return todo;
            }
            return todo;
          });
      }
      default : return state;
  }
}




export default todos;
