import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableView}
        onPress={() => navigation.navigate('NotificationSetting')}>
        <Text style={styles.text}>Notification and secure settings</Text>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={styles.touchableView}
        onPress={() => navigation.navigate('PaymentsMethod')}>
        <Text style={styles.text}>Payment methods</Text>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{...styles.touchableView, justifyContent: 'flex-start'}}>
        <AntDesign
          name="logout"
          size={24}
          color="black"
          style={{
            transform: [{rotate: '180deg'}],
            marginRight: 10,
          }}
        />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  touchableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
});
