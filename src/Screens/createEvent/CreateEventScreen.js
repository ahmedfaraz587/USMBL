import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const CreateEventScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={styles.headerText}>Create Events</Text>
          </View>
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <TouchableOpacity>
              <Ionicons name="image-outline" size={60} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.formsText}>Event name</Text>
          <TextInput
            placeholderTextColor="#979797"
            style={styles.formsInput}
            placeholder="Give a name to your event"
          />
          <View style={styles.smallView}>
            <View style={styles.iconView}>
              <Feather name="calendar" size={24} color="white" />
            </View>
            <TextInput
              placeholderTextColor="#979797"
              style={{...styles.formsInput, width: '82%'}}
              placeholder="calendar"
            />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.formsText}>Start time</Text>
            <Text style={styles.formsText}>End time</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginLeft: 35,
            }}>
            <TextInput
              placeholder="8:30 am"
              placeholderTextColor="#979797"
              style={{...styles.formsInput, width: 110}}
            />
            <TextInput
              placeholder="8:30 am"
              placeholderTextColor="#979797"
              style={{...styles.formsInput, width: 110}}
            />
          </View>
          <View style={styles.smallView}>
            <View style={styles.iconView}>
              <Ionicons name="location-outline" size={24} color="white" />
            </View>
            <TextInput
              placeholderTextColor="#979797"
              style={{...styles.formsInput, width: '82%'}}
              placeholder="location"
            />
          </View>
          <TextInput
            placeholderTextColor="#979797"
            style={{
              ...styles.formsInput,
              width: '82%',
              marginLeft: '18%',
              marginTop: 15,
            }}
            placeholder="calendar"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Invite')}>
            <LinearGradient
              colors={['#FF9A58', '#F87124']}
              style={styles.inviteButton}>
              <Feather name="users" size={20} color="white" />
              <Text style={styles.buttonText}>INVITE</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.formsText}>Participants</Text>
          <Text style={styles.greyCol}>
            Choose how many people can come to the your event
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.incrementButton}>
              <Text style={styles.incrementText}>-</Text>
            </TouchableOpacity>
            <View style={styles.incrementButton}>
              <Text style={styles.incrementText}>0</Text>
            </View>
            <TouchableOpacity style={styles.incrementButton}>
              <Text style={styles.incrementText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.aboutEventView}>
            <Text style={styles.formsText}>About Event</Text>
            <TextInput
              multiline
              placeholderTextColor="#979797"
              style={{
                ...styles.formsInput,
                height: 150,
                textAlignVertical: 'top',
              }}
              placeholder="you can add some notes to describe 
              your event bettr, so that gtoup of friends better
               understand what you are cooking up.  "
            />
          </View>
          <View style={styles.publicEventView}>
            <Text style={styles.formsText}>Public Event</Text>
            <Switch
              style={{marginLeft: 10}}
              trackColor={{false: '#767577', true: '#F87124'}}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
            <LinearGradient
              style={{...styles.inviteButton, width: '100%', marginBottom: 40}}
              colors={['#FF9A58', '#F87124']}>
              <Text style={styles.buttonText}>CREATE EVENT</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    height: 250,
    backgroundColor: '#F3F3F3',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    padding: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    marginLeft: 10,
  },
  inviteButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 5,
    alignSelf: 'center',
  },
  mainView: {
    flex: 1,
    padding: 15,
    marginTop: 5,
  },
  formsText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#464646',
  },
  formsInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    height: 53,
    padding: 10,
    marginTop: 10,
    fontSize: 15,
  },
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  smallView: {
    flexDirection: 'row',

    alignItems: 'center',
    marginTop: 20,
  },
  greyCol: {
    color: '#757575',
    marginTop: 5,
    marginBottom: 5,
  },
  incrementButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  incrementText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
  aboutEventView: {
    marginTop: 20,
  },
  publicEventView: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 5,
  },
  mapView: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  inviteButton: {
    width: 150,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 20,
  },
});
