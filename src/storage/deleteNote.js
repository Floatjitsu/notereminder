import AsyncStorage from '@react-native-community/async-storage';

export default async (id) => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (e) {}
};
