import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View} from 'react-native';
import ExploreScreen from '../Screens/ExploreScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopTabNavigatorEvents from './TopTabNavigatorEvents';
import ProfileTopTabNavigator from './ProfileTopTabNavigator';
import InboxTobTabNavigatior from './InboxTobTabNavigatior';
import CreateEventNavigators from './CreateEventNavigators';

const MainBottomBar = () => {
   const CustomTabBarButton = ({children, onPress}) => (
     <TouchableOpacity
       style={{
         top: -30,
         justifyContent: 'center',
         alignItems: 'center',
         elevation: 10,
       }}
       onPress={onPress}>
       <View
         style={{
           width: 70,
           height: 70,
           borderRadius: 35,
           backgroundColor: '#F87124',
         }}>
         {children}
       </View>
     </TouchableOpacity>
   );

   const Tab = createBottomTabNavigator();
   return (
     <Tab.Navigator
       initialRouteName="Explore"
       screenOptions={{
         tabBarStyle: {height: 65, backgroundColor: 'white'},
         tabBarActiveTintColor: '#F87124',
       }}>
       <Tab.Screen
         name="Explore"
         component={ExploreScreen}
         options={{
           tabBarLabel: 'explore',
           headerShown: false,
           tabBarLabelStyle: {fontSize: 11, marginBottom: 10},
           tabBarIcon: ({color}) => (
             <Image
               source={require('../assets/icons/search.png')}
               style={{width: 20, height: 20}}
             />
           ),
         }}
       />
       <Tab.Screen
         name="Events"
         component={TopTabNavigatorEvents}
         options={{
           headerTitleAlign: 'center',
           tabBarLabel: 'events',
           tabBarLabelStyle: {fontSize: 11, marginBottom: 10},
           tabBarIcon: ({color}) => (
             <Image
               source={require('../assets/icons/events.png')}
               style={{width: 20, height: 20}}
             />
           ),
         }}
       />
       <Tab.Screen
         name="CreateEvent"
         component={CreateEventNavigators}
         options={{
           headerShown: false,
           headerTitleAlign: 'center',
           tabBarShowLabel: false,
           // tabBarLabelStyle: {fontSize: 11, marginBottom: 10 ,},
           tabBarIcon: ({color}) => (
             <AntDesign name="plus" size={30} color="white" />
           ),
           tabBarButton: props => <CustomTabBarButton {...props} />,
         }}
       />
       <Tab.Screen
         name="Inbox"
         component={InboxTobTabNavigatior}
         options={{
           tabBarLabel: 'inbox',
           headerTitleAlign: 'center',
           tabBarLabelStyle: {fontSize: 11, marginBottom: 10},
           tabBarIcon: ({color}) => (
             <Image
               source={require('../assets/icons/inbox.png')}
               style={{width: 20, height: 20}}
             />
           ),
         }}
       />
       <Tab.Screen
         name="Profile"
         component={ProfileTopTabNavigator}
         options={{
           tabBarLabel: 'you',
           headerTitleAlign: 'center',
           tabBarLabelStyle: {fontSize: 11, marginBottom: 10},
           tabBarIcon: ({color}) => (
             <Image
               source={require('../assets/icons/profile.png')}
               style={{width: 20, height: 20}}
             />
           ),
         }}
       />
     </Tab.Navigator>
   );
}

export default MainBottomBar;