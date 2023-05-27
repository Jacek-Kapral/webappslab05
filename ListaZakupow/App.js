import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = () => {
    if (inputText.trim() !== '') {
      setShoppingList([...shoppingList, inputText]);
      setInputText('');
    }
  };
  const removeItem = (index) => {
    const updatedList = [...shoppingList];
    updatedList.splice(index, 1);
    setShoppingList(updatedList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setInputText(text)}
          value={inputText}
          placeholder="Enter an item"
        />
        <Button title="Add" onPress={addItem} />
      </View>
      <FlatList
        data={shoppingList}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => removeItem(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
export default App;
