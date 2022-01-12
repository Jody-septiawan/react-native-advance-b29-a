import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

// Import Screens
import Posts from './src/screens/Posts';
import PostDetail from './src/screens/DetailPost';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="DetailPost" component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}