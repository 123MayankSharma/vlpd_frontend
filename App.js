import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Info from './screens/Info'
import Constants from "expo-constants";
function App() {

  const Stack = createNativeStackNavigator();
  return (

    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "VLPD" }} />
      {/* <Stack.Screen name="Info" component={Info} options={{ title: "Owner Info" }} /> */}
    </Stack.Navigator>
  )
}
const containerTheme = {
  dark: true,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(0, 0, 0)",
    card: "rgb(2, 127, 128)",
    text: "rgb(252, 254, 255)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default () => {
  return (
    <NavigationContainer theme={containerTheme}>
      <App />
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});


