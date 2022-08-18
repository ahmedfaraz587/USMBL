import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/hand.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.text}>No events booked..yet</Text>
        <TouchableOpacity>
          <LinearGradient style={styles.button} colors={['#FF9A58', '#F87124']}>
            <Text style={styles.btnText}>START SEARCHING</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: '50%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  logoView: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2EA',
    borderRadius: 50,
  },
  logo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginTop:15,
  },
  button: {
    width: 170,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15,
     borderRadius: 10,
  },
  btnText: {
     color:'white',
     fontSize:14,
     fontWeight:'500',
  }
});
