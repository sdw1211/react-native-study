import React, { useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable, GestureResponderEvent } from 'react-native';
import { Todo } from '../model/Todo';
import TodoContenxt from './../context/TodoContext';

const {width} = Dimensions.get('window');

export interface TodoProps {
  todo: Todo;
}

function TodoView({todo}: TodoProps): JSX.Element {
  const context = useContext(TodoContenxt);
  return (
    <View style={style.container}>
      <Text>{todo.todo}</Text>
      <Pressable onPress={e => {
        context.deleteTodo(todo);
      }}>
        <Text>X</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: width - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default TodoView;