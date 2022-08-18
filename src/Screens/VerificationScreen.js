import React from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const VerificationScreen = ({navigation}) => {
  const [otp, setOtp] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verification</Text>
      <Text style={styles.smallText}>
          We have sent your verification number to phone + 4555 666 674
      </Text>

      <View style={{height: 50, padding: 20, marginTop: 15, marginBottom: 10}}>
        <OTPInputView
          codeInputHighlightStyle={{backgroundColor: '#FFCCAA'}}
          pinCount={4}
          onCodeFilled={code => setOtp(code)}
          codeInputFieldStyle={styles.codeInputFieldStyle}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Interest')}>
        <LinearGradient style={styles.button} colors={['#FF9A58', '#F87124']}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.lastText}>
        Resend code in <Text style={{color: '#F87124'}}>10 sec</Text>
      </Text>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    paddingTop: 30,
    backgroundColor: 'white',
    width: '100%',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  smallText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    color: '#979797',
  },
  input: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: 'black',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  lastText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
  },
  codeInputFieldStyle: {
    width: 50,
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
