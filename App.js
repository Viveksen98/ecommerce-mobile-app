import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { mystore } from './src/redux/store';
import Routes from './src/navigation/Routes';

export default function App() {
  return (
    <Provider store={mystore}>
      <Routes />
    </Provider>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
