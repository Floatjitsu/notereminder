import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const NoteDetailScreen = ({ navigation }) => {
  const noteId = navigation.getParam('noteId');
  const noteTitle = navigation.getParam('title');
  const notes = navigation.getParam('notes');

  return (
    <View style={styles.container}>
      <Text h4>{noteTitle}</Text>
      <Text style={styles.notes}>{notes}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit Note" />
        <View style={{ marginTop: 10 }} />
        <Button title="Delete Note" buttonStyle={{ backgroundColor: 'red' }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  notes: {
    color: 'gray'
  },
  buttonContainer: {
    marginTop: 10
  }
});

export default NoteDetailScreen;
