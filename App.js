
import React from 'react';
import {useState,useEffect,useRef} from "react"
import { NativeBaseProvider} from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import { Animated, View } from 'react-native';
import { useFonts } from 'expo-font';
//screens
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Home from './screens/Home';

//headers

import HomeHeader from './components/HomeHeader';
//route
const Stack = createNativeStackNavigator();


export default function App() {
  
  const [fontLoad] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });
 
  const [loaded,setLoaded] = useState(false)

  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim])

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  },2000)
  
  if (loading) {
    return (
      <NativeBaseProvider>
        <Animated.View
          style={{
            opacity:fadeAnim
          }}
        >
          <WelcomeScreen />
        </Animated.View>
      </NativeBaseProvider>
    )
  }
  if (!fontLoad) {
    return null;
  }
  return (
    <NativeBaseProvider>
      {loaded ? <Login setLoaded={setLoaded} /> : null}
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}
            options={{
              headerTitle: (props) => <HomeHeader /> 
        }}  />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

