import {createSlice} from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'todos',
  initialState: {
    todos: null,
    testing: 'TESTING..',
  },
  reducers: {
    addEditDeleteTodoSuccess: (state, action) => {
      state.todos = action.payload;
    },
  },
});
export default slice.reducer;

// Action
const {addEditDeleteTodoSuccess} = slice.actions;

export const addEditDeleteTodo = todos => async dispatch => {
  console.log('dis todo is ', todos);
  try {
    dispatch(addEditDeleteTodoSuccess(todos));
  } catch (e) {
    return console.error(e.message);
  }
};

// export const testTodosSuccess = testings => async dispatch => {
//   try {
//     dispatch(testTodos(testings));
//   } catch (e) {
//     return console.log('error while testingg');
//   }
// };
