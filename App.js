import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import MainContainer from '../navigation/MainContainer.js';
import MainStack from './src/navigation/MainStack.js';


export default function App() {
  return (

    < SafeAreaView style={SafeAreaView}>
      <NavigationContainer>

        <MainStack />

      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
