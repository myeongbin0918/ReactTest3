import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const __addTodo = createAsyncThunk('ADD_TODO_WAIT', (payload, thunkAPI) => {
  setTimeout(() => {
    thunkAPI.dispatch(addTodo(payload));
  }, 2000);
});

export const __deleteTodo = createAsyncThunk('DELETE_TODO_WAIT', (payload, thunkAPI) => {
  setTimeout(() => {
    thunkAPI.dispatch(deleteTodo(payload));
  }, 2000);
});

const initialState = {
  todos: [
    {
      id: '1',
      title: '리액트',
      body: '리액트를 배워봅시다',
      isDone: false,
    },
  ],
  todo: {
    id: '0',
    title: '',
    body: '',
    isDone: false,
  },
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    },
    toggleStatusTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    },
    getTodoByID: (state, action) => {
      return {
        ...state,
        todo: state.todos.find(todo => {
          return todo.id === action.payload;
        }),
      };
    },
  },
});

export const { addTodo, deleteTodo, toggleStatusTodo, getTodoByID } = todosSlice.actions;
export default todosSlice.reducer;
