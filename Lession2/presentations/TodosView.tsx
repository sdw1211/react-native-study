import React, {useState, useContext} from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import TodoView from './TodoView';
import {Todo as TodoVO} from '../model/Todo';
import TodoContenxt from './../context/TodoContext';

function TodosView(): JSX.Element {
  const context = useContext(TodoContenxt);
  return (
    <FlatList 
      data={context.todos}
      renderItem={({item}) => <TodoView todo={item} />}
      keyExtractor={item => item.todo}
    />
  );
}

export default TodosView;