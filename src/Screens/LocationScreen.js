import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const LocationScreen = ({navigation}) => {
     return (
       <View style={styles.container}>
         <Text style={styles.headerText}>Set your location</Text>
         <Text style={styles.text}>
           Select your location and start to enjoy
         </Text>
         <Text style={styles.text}>events near you </Text>

         <Image
           source={require('../assets/Location.png')}
           style={styles.image}
         />

         <View style={styles.buttonView}>
           <TouchableOpacity
             onPress={() => navigation.navigate('Tab')}>
             <Text style={styles.btnText}>skip</Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => navigation.navigate('Tab')}>
             <Text style={styles.btnText}>Next</Text>
           </TouchableOpacity>
         </View>
       </View>
     );
}

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    paddingTop: 20,
    marginTop:90,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    color: '#979797',
  },
  buttonView: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    position:'absolute',
     bottom:10,
  },
  btnText: {
    color: 'black',
    fontSize: 16,
  },
  image: {
     marginTop:30,
     width:300,
     height:300,
  }
});