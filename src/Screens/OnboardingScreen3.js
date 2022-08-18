import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OnboardingScreen3 = () => {
  return (
    <View style={styles.container}>
        <LinearGradient style={{flex:1}} colors={['#FF9A58', '#F87124']}>
        <View style={styles.imageGrid}>
          <View style={styles.row1}>
            <Image
              source={require('../assets/Rectangle7.png')}
              style={styles.row1image}
            />
            <Image
              source={require('../assets/Rectangle9.png')}
              style={styles.row1image}
            />
            <Image
              source={require('../assets/Rectangle11.png')}
              style={styles.row1image}
            />
          </View>
          <View style={styles.row2}>
            <Image
              source={require('../assets/Rectangle12.png')}
              style={styles.row2image}
            />
            <Image
              source={require('../assets/Rectangle13.png')}
              style={styles.row2image}
            />
            <Image
              source={require('../assets/Rectangle14.png')}
              style={styles.row2image}
            />
          </View>
          <View style={styles.row3}>
            <Image
              source={require('../assets/Rectangle15.png')}
              style={styles.row2image}
            />
            <Image
              source={require('../assets/Rectangle16.png')}
              style={styles.row2image}
            />
          </View>
        </View>
        <View style={{width: '100%'}}>
          <Image
            source={require('../assets/Vectorhand.png')}
            style={styles.hand}
          />
        </View>
        <Text style={{...styles.text, marginTop: -30}}>Enjoy with</Text>
        <Text style={styles.text}>friends</Text>
    </LinearGradient>
      </View>
  );
};

export default OnboardingScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:700,
    backgroundColor:'yellow'
  },
  text: {
    fontWeight: '700',
    fontSize: 40,
    color: 'black',
    marginLeft:10
  },
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hand: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: -19,
    width: 110,
    height: 120,
  },
  row1image: {
    width: 114,
    height: 132,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
  },
  row2image: {
    width: 128,
    height: 150,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
  },
  row1: {
    marginLeft: -30,
    marginTop: -10,
  },
  row2: {},
  row3: {},
});
