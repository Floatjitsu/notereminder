import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FloatingActionButton = ({ onButtonPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
      <AntDesign name="plus" size={24} style={{ color: 'white' }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 25
  }
});

export default FloatingActionButton;
