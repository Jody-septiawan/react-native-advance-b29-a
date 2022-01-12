// Import React Navigation & Stack
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Import Icon
import { Ionicons } from '@expo/vector-icons'

// Import Styling
import { useTheme } from 'native-base'

// Create Stack & Bottom Tab Navigation
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// Import Screens
import FormNativeBase from './src/screens/form'
import Hello from './src/screens/hello'
import IncDec from './src/screens/incDec'
import ListSoc from './src/screens/listSoc'
import DetailSoc from './src/screens/detailSoc'

function MyTab() {
    const theme = useTheme()
    return (
        <Tab.Navigator 
            initialRouteName='Hello'
            screenOptions={({ route }) => ({
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: theme.colors.primary['900'] },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if(route.name === "Hello"){
                        iconName = focused ? "ios-home" : "ios-home-outline"
                    } else if (route.name == "Form") {
                        iconName = focused ? "ios-information-circle" : "ios-information-circle-outline"
                    } else if (route.name == "Social Media") {
                        iconName = focused ? "ios-list-circle" : "ios-list-circle-outline"
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: theme.colors.primary['600'],
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen name="Hello" component={Hello} />
            <Tab.Screen name="Form" component={FormNativeBase} />
            <Tab.Screen name="Social Media" component={ListSoc} />
        </Tab.Navigator>
    )
}

export default function Container(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home'
                    component={MyTab} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name='IncDec'
                    component={IncDec} 
                />
                <Stack.Screen 
                    name='Detail Social'
                    component={DetailSoc} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}