import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EventDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <ImageBackground
          source={require('../../assets/createevent.png')}
          style={styles.headerImage}
          resizeMode="stretch">
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Create Events</Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <LinearGradient
          style={styles.eventTitleCard}
          colors={['#FF9A58', '#F87124']}>
          <Text style={styles.eventTitleText}>Wine tasting London Tour</Text>
        </LinearGradient>
      </View>
      <View style={styles.view}>
        <View style={styles.iconView}>
          <MaterialCommunityIcons name="cash" size={24} color="white" />
        </View>
        <Text style={styles.text}>free to join</Text>
      </View>
      <View style={styles.view}>
        <View style={styles.iconView}>
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={24}
            color="white"
          />
        </View>
        <View>
          <Text style={styles.text}>Mon, Jun, 5, 2022</Text>
          <Text style={styles.dateText}>10 a.m - 2 p.m</Text>
        </View>
        <TouchableOpacity style={styles.changeButton}>

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventDetailScreen;

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
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10,
  },
  header: {
    marginBottom: 17,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headerImage: {
    height: 260,
    width: '100%',
  },
  eventTitleCard: {
    width: '70%',
    alignSelf: 'center',
    height: 100,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: -65,
  },
  eventTitleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 25,
    marginRight: 15,
  },
  text: {
    fontSize: 15,
    color: '#464646',
  },
  view: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
    width: '100%',
  },
  dateText: {
    color: '#757575',
  },
  changeButton: {
    backgroundColor: '#F5F5F5',
    width:100,
    height:40,
     position:'absolute',
     right:20,
     borderRadius:10,
     flexDirection:'row',
  },
});
