import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const ProfileDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.image}
        />
        <View style={styles.iconView}>
          <Icon name="camera-plus-outline" size={25} color="#F87124" />
        </View>
        <Text style={styles.text}>James james</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', marginRight: 30}}>
            <Text style={styles.numText}>10</Text>
            <Text style={styles.otherText}>organised</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.numText}>19</Text>
            <Text style={styles.otherText}>joined</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Text style={styles.interestText}>Interest</Text>
        <Feather name="edit" size={24} />
        <Text style={{color: 'black', marginLeft: 5}}>change</Text>
      </View>
      <View style={{flexDirection: 'row',}}>
        <View style={styles.interestTextView}>
          <Text>music</Text>
        </View>
        <View style={styles.interestTextView}>
          <Text>travel</Text>
        </View>
        <View style={styles.interestTextView}>
          <Text>education</Text>
        </View>
      </View>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{' '}
      </Text>
    </View>
  );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF2EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20%',
    marginTop: '-10%',
    borderRadius: 40 / 2,
  },
  numText: {
    color: '#F87124',
    fontSize: 21,
    marginTop: 10,
    fontWeight: '500',
  },
  otherText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  interestText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    padding: 15,
    marginRight: 10,
  },
  interestTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 80,
    backgroundColor: '#FFF2EA',
    borderRadius: 10,
    marginLeft: 10,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '400',
    color: '#464646',
    padding:15
  },
});
