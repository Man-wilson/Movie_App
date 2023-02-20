import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigation } from './src/navigation/RootNavigation';
import { Features } from './src/screen';
import { Search } from './src/screen/HomeScreen/Search';
import { SearchResaults } from './src/screen/HomeScreen/SearchResaults';
import { Work } from './src/screen/HomeScreen/workSearch';
import { CountScreen } from './src/screen/redux/countScreen';
import { store } from './src/store';

export default function App() {
  return (
   <Provider store={store}>
    <RootNavigation />
   </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
