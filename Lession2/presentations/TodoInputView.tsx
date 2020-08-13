import React, { useState, useCallback } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

interface Props{
  onChange: (value: string) => void
}

function TodoInputView({onChange}: Props): JSX.Element {
  const [value, setValue] = useState('');
  const addTodo = useCallback(() => {
    onChange(value);
    setValue('');
  }, [value]);

  return (
    <View style={style.container}>
      <TextInput
        style={style.text}
        value={value}
        onChangeText={text => setValue(text)}
      />
      <Button onPress={addTodo} title="등록" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },  
  text: {
    borderWidth: 1,
    borderColor: 'rgb(0,0,0)',
    padding: 10,
    fontSize: 14,
    lineHeight: 16,
    width: 300,
  }
});

export default TodoInputView;
