import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store';
import { Provider } from 'react-redux'
import AddScreen from './screens/AddScreen';
import Main from './screens/Main';




export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{
            title: '',

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
