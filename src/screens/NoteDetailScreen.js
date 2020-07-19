import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NoteDetailScreen = ({ navigation }) => {
  const noteId = navigation.state.params.noteId;

  return (
    <View>
      <Text>{noteId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NoteDetailScreen;
