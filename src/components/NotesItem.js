import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NotesItem = ({ navigation, title, notes, id, reminder }) => {
  const reminderIsSet = Object.entries(reminder).length === 0 ? false : true;

  const onItemPress = () => {
    const noteId = id;
    navigation.navigate('NoteDetail', { noteId, title, notes, reminder });
  };

  return (
    <>
      <TouchableOpacity onPress={onItemPress}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.reminderContainer}>
          <MaterialIcons
            name="alarm"
            size={18}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text>
            {reminderIsSet
              ? `${reminder.date} ${reminder.time}`
              : 'No reminder'}
          </Text>
        </View>
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
  },
  reminderContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default NotesItem;
