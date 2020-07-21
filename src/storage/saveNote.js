import AsyncStorage from '@react-native-community/async-storage';

export default async (note) => {
  try {
    await AsyncStorage.setItem(
      note.id,
      JSON.stringify({
        title: note.title,
        notes: note.notes,
        reminder: note.reminder
      })
    );
  } catch (e) {
    console.log(`Something went wrong: ${e.message}`);
  }
};
