import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import OnboardingLanding from '../Screens/OnboardingLanding';
import SignupScreen from '../Screens/SignupScreen';
import VerificationScreen from '../Screens/VerificationScreen';
import InterestScreen from '../Screens/InterestScreen';
import LocationScreen from '../Screens/LocationScreen';
import MainBottomBar from './MainBottomBar';


const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Tab">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnboardingLanding" component={OnboardingLanding} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="Interest" component={InterestScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Tab" component={MainBottomBar} />
     
    </Stack.Navigator>
  );
};

export default AuthNavigator;
