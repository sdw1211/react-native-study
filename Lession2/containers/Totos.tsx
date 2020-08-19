import React, {useState} from 'react';
import { Todo } from '../model/Todo';
import TodosView from '../presentations/TodosView';
import TodoInputView from '../presentations/TodoInputView';
import { View, StyleSheet } from 'react-native';
import TodoContext from '../context/TodoContext';

export interface Props {}

function Todos(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <TodoContext.Provider value={{
      todos,
      deleteTodo: function todo(value) {
        setTodos(this.todos.filter(todo => todo.todo !== value.todo));
      },
      insertTodo: function todo(value) {
        setTodos([...this.todos, value]);
      },
    }}>
      <View style={style.container}>
        <TodoInputView />
        <TodosView />
      </View>
    </TodoContext.Provider>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});

export default Todos;