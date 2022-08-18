import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OnboardingScreen1 = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FF9A58', '#F87124']} style={styles.letPlayView}>
        <Image source={require('../assets/ball.png')} style={styles.icon} />
        <Text style={{color: '#ffffff'}}>let's play!</Text>
      </LinearGradient>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View style={styles.imageView}>
          <Image source={require('../assets/women.png')} style={styles.image} />
        </View>
        <View style={styles.takeParty}>
          <Image source={require('../assets/roll.png')} style={styles.icon} />
          <Text style={{color: '#ffffff'}}>tako party</Text>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2EA',
    width:'100%'
  },
  letPlayView: {
    width: 126,
    height: 35,
    backgroundColor: '#FF9A58',
    padding: 5,
    borderRadius: 10,
    marginTop: 70,
    marginLeft: 40,
    transform: [{rotate: '-25deg'}],
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  takeParty: {
    flexDirection: 'row',
    width: 126,
    height: 35,
    backgroundColor: '#303030',
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    transform: [{rotate: '-10deg'}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  imageView: {
    width: 215,
    //     justifyContent: 'center',
    //     alignItems: 'center',
  },
});
