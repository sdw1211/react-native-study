import React, {useState} from 'react';
import { Todo } from '../model/Todo';
import TodosView from '../presentations/TodosView';
import TodoInputView from '../presentations/TodoInputView';
import { View, StyleSheet } from 'react-native';

export interface Props {}

function Todos(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <View style={style.container}>
      <TodoInputView onChange={(value: string) => {
        setTodos([...todos,  {todo: value}]);
      }} />
      <TodosView todos={todos} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});

export default Todos;