import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import CreateEventScreen from '../Screens/createEvent/CreateEventScreen';
import InviteSocialMedia from '../Screens/createEvent/InviteSocialMedia';
import InviteScreen from '../Screens/createEvent/InviteScreen';
import InviteContact from '../Screens/createEvent/InviteContact';
import EventDetailScreen from '../Screens/createEvent/EventDetailScreen';
import ShareEventScreen from '../Screens/createEvent/ShareEventScreen';

const CreateEventNavigators = () => {
     const Stack = createStackNavigator()
     return (
          <Stack.Navigator initialRouteName='CreateEvents' screenOptions={{
               headerShown:false
          }}>
               <Stack.Screen name='CreateEvents' component={CreateEventScreen} />
               <Stack.Screen name='Invite' component={InviteScreen} />
               <Stack.Screen name='InviteSocialMedia' component={InviteSocialMedia} />
               <Stack.Screen name='InviteContact' component={InviteContact} />
               <Stack.Screen name='EventDetail' component={EventDetailScreen} />
               <Stack.Screen name='ShareEvent' component={ShareEventScreen}    />
          </Stack.Navigator>
     );
}

export default CreateEventNavigators;