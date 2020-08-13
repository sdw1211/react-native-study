import React, {useState} from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import TodoView from './TodoView';
import {Todo as TodoVO} from '../model/Todo';

export interface Props {
  todos: null | TodoVO[],
}

function TodosView({todos}: Props): JSX.Element {
  return (
    <FlatList 
      data={todos}
      renderItem={({item}) => <TodoView todo={item} />}
      keyExtractor={item => item.todo}
    />
  );
}

export default TodosView;