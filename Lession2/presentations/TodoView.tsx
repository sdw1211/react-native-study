import React from 'react';
import { Text } from 'react-native';
import { Todo } from '../model/Todo';

export interface TodoProps {
  todo: Todo;
}

function TodoView({todo}: TodoProps): JSX.Element {
  return (
    <Text>{todo.todo}</Text>
  );
}

export default TodoView;