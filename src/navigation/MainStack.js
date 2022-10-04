import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Chat from '../Components/Chat';
import MainContainer from './MainContainer';


const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator >

            <Stack.Screen
                name='Chat'
                component={Chat}
            />
        <Stack.Screen
                name='Container'
                component={MainContainer}
            />


        </Stack.Navigator>
    )
}

export default MainStack