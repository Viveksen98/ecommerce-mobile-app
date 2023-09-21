import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Main from './src/screens/Main';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';


export default function App() {
  return (
    <Provider store={Store}>
      <Main />
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
