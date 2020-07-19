import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './src/store';
import NotesScreen from './src/screens/NotesScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';

const navigator = createStackNavigator(
  {
    Notes: NotesScreen,
    CreateNote: {
      screen: CreateNoteScreen,
      navigationOptions: () => ({
        title: 'Create New Note'
      })
    }
  },
  {
    initialRouteName: 'Notes',
    defaultNavigationOptions: {
      title: 'My Notes'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
