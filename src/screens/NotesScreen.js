import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addnote } from '../actions/noteActions';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import NotesItem from '../components/NotesItem';
import FloatingActionButton from '../components/FloatingActionButton';

const NotesScreen = ({ navigation }) => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();
  const addNote = (note) => dispatch(addnote(note));

  const renderItem = ({ item }) => {
    return (
      <NotesItem
        navigation={navigation}
        id={item.id}
        title={item.title}
        notes={item.notes}
      />
    );
  };

  const onButtonPress = () => {
    navigation.navigate('CreateNote', { addNote });
  };

  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FloatingActionButton onButtonPress={onButtonPress} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 10
  },
  buttonContainer: {
    position: 'absolute',
    right: 30,
    bottom: 30
  }
});

export default NotesScreen;
