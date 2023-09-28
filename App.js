import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {HomePage} from "./src/components/homePage";
import { store } from './src/store/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
      <Provider store={store}>
    <View style={{flex: 1}}>
      <HomePage />
      <StatusBar style="auto" />
    </View>
      </Provider>
  );
}


