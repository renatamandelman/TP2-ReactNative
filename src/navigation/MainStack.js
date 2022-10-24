import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chat from '../Components/Chat';
import Setting from '../Components/Setting';

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chat') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >

            <Tab.Screen
                name='Chat'
                component={Chat}
            />
              <Tab.Screen
                name='Setting'
                component={Setting}
            />
         {/* <Stack.Screen
                name='Container'
                component={MainContainer}
            />  */}


        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainStack