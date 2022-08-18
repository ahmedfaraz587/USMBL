import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        placeholderTextColor="#979797"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#979797"
        value={phoneNumber}
        keyboardType="number-pad"
        onChangeText={text => setPhoneNumber(text)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
        <LinearGradient style={styles.button} colors={['#FF9A58', '#F87124']}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: 'black',
    marginTop: 10,
    height: 53,
    backgroundColor: '#F5F5F5',
  },
  button: {
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom:10,
  },
     buttonText: {
     color: 'white',
     fontSize: 16,
     fontWeight: '500',
     },
});
