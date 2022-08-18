import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.font1}>Welcome To</Text>
        <Text style={styles.font1}>USMBL</Text>
        <Text style={styles.font2}>Greate Your plans with us</Text>
        <View style={styles.image1row}>
          <Image
            style={styles.image}
            source={require('../assets/Ellipse42.png')}
          />
          <View style={styles.iconContainerRight}>
            <Image style={styles.icon} source={require('../assets/hand.png')} />
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={{...styles.image1row, justifyContent: 'space-between'}}>
          <View style={styles.iconContainerLeft}>
            <Image
              style={styles.icon}
              source={require('../assets/paint.png')}
            />
          </View>
          <Image
            style={{...styles.image, marginTop: -24}}
            source={require('../assets/Ellipse41.png')}
          />
        </View>
        <View style={{...styles.image1row, alignItems: 'baseline'}}>
          <Image
            style={styles.image}
            source={require('../assets/Ellipse40.png')}
          />
          <View
            style={{
              ...styles.iconContainerRight,
              marginLeft: '34%',
            }}>
            <Image style={styles.icon} source={require('../assets/ball.png')} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OnboardingLanding')}>
          <LinearGradient colors={['#FF9A58', '#F87124']} style={styles.button}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#f2f5f3',
  },
  logo: {
    width: 40,
    height: 54,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 98,
    height: 98,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#F6C056',
    borderWidth: 0.3,
  },
  font1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  font2: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  image: {
    width: 134,
    height: 134,
    borderRadius: 80,
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  image1row: {
    flexDirection: 'row',
    width: '100%',
  },
  iconContainerRight: {
    width: 44,
    height: 44,
    backgroundColor: '#FFF2EA',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 69,
  },
  iconContainerLeft: {
    width: 44,
    height: 44,
    backgroundColor: '#FFF2EA',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 69,
    marginLeft: 30,
  },
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    flex: 1,
    alignSelf: 'baseline',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
