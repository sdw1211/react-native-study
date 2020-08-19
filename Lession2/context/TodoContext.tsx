import React from 'react';
import { Todo } from '../model/Todo';

const context = React.createContext<{
  deleteTodo: (todo: Todo) => void,
  todos: Todo[],
  insertTodo: (todo: Todo) => void,
}>({
  deleteTodo: (todo: Todo) => {},
  todos: [],
  insertTodo: (todo: Todo) => {},
});

export default context;