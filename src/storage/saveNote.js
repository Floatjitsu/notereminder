import AsyncStorage from '@react-native-community/async-storage';

export default async ({ id, title, notes, reminder }) => {
  try {
    await AsyncStorage.setItem(id, JSON.stringify({ title, notes, reminder }));
    console.log('SAVE WAS SUCCESSFULL');
  } catch (e) {
    console.log(`Something went wrong: ${e.message}`);
  }
};
