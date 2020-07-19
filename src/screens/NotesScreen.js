import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import NotesItem from '../components/NotesItem';
import FloatingActionButton from '../components/FloatingActionButton';

const NotesScreen = ({ navigation }) => {
  const notes = useSelector((state) => state);

  const renderItem = ({ item }) => {
    return (
      <NotesItem
        navigation={navigation}
        id={item.id}
        title={item.title}
        notes={item.notes}
        reminder={item.reminder}
      />
    );
  };

  const onButtonPress = () => {
    navigation.navigate('CreateNote');
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
