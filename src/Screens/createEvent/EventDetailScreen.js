import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EventDetailScreen = ({navigation}) => {
  const images = [
    {
      image: require('../../assets/Rectangle7.png'),
    },
    {
      image: require('../../assets/Rectangle9.png'),
    },
    {
      image: require('../../assets/Rectangle11.png'),
    },
    {
      image: require('../../assets/Rectangle12.png'),
    },
    {
      image: require('../../assets/Rectangle13.png'),
    },
  ];

  return (
    <ScrollView>
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
              <View style={styles.shareIconView}>
                <MaterialCommunityIcons
                  name="image-edit-outline"
                  size={24}
                  color="#F87124"
                />
              </View>
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
            <AntDesign
              name="edit"
              size={20}
              color="#757575"
              style={{marginRight: 8}}
            />

            <Text style={styles.text}>change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view}>
          <View style={styles.iconView}>
            <Feather name="user" size={24} color="white" />
          </View>
          <View style={{flexDirection: 'row'}}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={image.image}
                style={styles.smallImage}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.changeButton}>
            <Ionicons
              name="person-add-outline"
              size={20}
              color="#757575"
              style={{marginRight: 8}}
            />
            <Text style={styles.text}>invite</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.aboutView}>
          <Text style={styles.aboutText}>About event</Text>
          <TouchableOpacity style={styles.aboutChangeButton}>
            <AntDesign
              name="edit"
              size={20}
              color="#757575"
              style={{marginRight: 8}}
            />

            <Text style={styles.text}>change</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 15}}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </View>
        <View style={styles.mapView}>
          <Image
            source={require('../../assets/map.jpg')}
            style={{width: '95%', height: 200}}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ShareEvent')}>
          <LinearGradient
            style={{...styles.inviteButton, width: '95%', marginBottom: 40}}
            colors={['#FF9A58', '#F87124']}>
            <Text style={styles.buttonText}>POST NOW</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    fontSize: 16,
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
    width: 100,
    height: 40,
    position: 'absolute',
    right: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  aboutChangeButton: {
    backgroundColor: '#F5F5F5',
    width: 100,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  smallImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -20,
  },
  aboutView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
  },

  aboutText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
    color: 'black',
  },
  mapView: {
    height: 150,
    width: '100%',
    borderRadius: 20,
    marginBottom: 40,
    alignItems: 'center',
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
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    marginLeft: 5,
  },
  shareIconView: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    elevation: 5,
  },
});
