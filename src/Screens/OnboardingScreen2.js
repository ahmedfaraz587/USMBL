import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OnboardingScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerCont1}>
        <LinearGradient
          colors={['#FF9A58', '#F87124']}
          style={styles.letPlayView}>
          <Image source={require('../assets/wine.png')} style={styles.icon} />
          <Text style={{color: '#ffffff'}}>wine tasting</Text>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View style={styles.imageView}>
            <Image source={require('../assets/men.png')} style={styles.image} />
          </View>
          <View style={styles.takeParty}>
            <Image
              source={require('../assets/guitar.png')}
              style={styles.icon}
            />
            <Text style={{color: '#ffffff'}}>jam sesion</Text>
          </View>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <Image
          source={require('../assets/linevector.png')}
          style={styles.hand}
        />
      </View>
      <LinearGradient colors={['#FF9A58', '#F87124']} style={styles.innerCont2}>
        <Text style={{...styles.text, marginTop: 50}}>Explore new</Text>
        <Text style={styles.text}>event</Text>
      </LinearGradient>
    </View>
  );
};

export default OnboardingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2EA',
    width:'100%'
  },
  innerCont1: {
    flex: 0.6,
  },
  text: {
    fontWeight: '700',
    fontSize: 40,
    color: 'black',
  },
  innerCont2: {
    padding: 15,
    flex: 0.4,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  hand: {
    alignSelf: 'center',
    marginRight: 50,
    marginTop: -19,
    width: 150,
    height: 150,
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
    flexDirection: 'row',
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
  },
});
