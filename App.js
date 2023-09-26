import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {HomePage} from "./src/components/homePage";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <HomePage />
      <StatusBar style="auto" />
    </View>
  );
}


