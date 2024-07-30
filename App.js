import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './src/pages/Home/index';
import FormPage1 from './src/pages/FormPage1/index'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={ ({route}) => ({
        headerShown: false,
        tabBarStyle: { 
          height: '15%',
          paddingBottom: '3%',
          backgroundColor: '#7b2cbf',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          overflow: 'hidden', },
      }) }
      tabBarOptions={{
        activeBackgroundColor: '#7b2cbf',
        activeTintColor: 'white',
        inactiveBackgroundColor: '#7b2cbf',
        inactiveTintColor: '#5d2191'
      }}
      >
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="building" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='Calendar' 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar-alt" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='List' 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='Profile' 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name='FormPage1' component={FormPage1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}