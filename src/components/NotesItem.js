import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const NotesItem = ({ title, notes, id }) => {
  const onItemPress = () => {
    console.log(`Note item ${id} got pressed`);
  };

  return (
    <>
      <TouchableOpacity onPress={onItemPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.notes}>{notes}</Text>
        <View style={styles.seperator}></View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  notes: {
    color: 'grey'
  },
  seperator: {
    marginBottom: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#000'
  }
});

export default NotesItem;
