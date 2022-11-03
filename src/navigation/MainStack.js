import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
// import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Ionicons } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chat from '../Components/Chat';
import PhoneNumber from '../Components/PhoneNumber';
import ImagenFondo from '../Components/ImagenFondo';

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
            } else if (route.name === 'PhoneNumber') {
              return <FontAwesome name='mobile-phone' size={size} color={color} />
            }
            else if (route.name === 'ImagenFondo'){
              return <AntDesign name='picture' size={size} color={color} />
            }
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
                name='PhoneNumber'
                component={PhoneNumber}
            />
              <Tab.Screen
                name='ImagenFondo'
                component={ImagenFondo}
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