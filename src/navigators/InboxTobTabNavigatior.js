import React from 'react';
import MessagesScreen from '../Screens/Inbox/MessagesScreen';
import NotificationScreen from '../Screens/Inbox/NotificationScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ChatRoomScreen from '../Screens/Inbox/ChatRoomScreen';

const InboxTobTabNavigatior = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Messages">
      <Tab.Screen
        name="Messages"
        component={StackScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
    </Tab.Navigator>
  );
};

function StackScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="MessagesScreen" 
    screenOptions={{
     headerShown:false
    }}
    >
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
    </Stack.Navigator>
  );
}

export default InboxTobTabNavigatior;
