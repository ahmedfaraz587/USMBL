import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Divider, Switch} from 'react-native-paper';

const NotificationSetting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>People can invite me to events</Text>
        <Switch value={true} color="#F87124" />
      </View>
      <Divider />
      <View style={styles.row}>
        <Text style={styles.text}>Message notification</Text>
        <Switch value={true} color="#F87124" />
      </View>
      <Divider />
      <View style={styles.row}>
        <Text style={styles.text}>Make my profile private</Text>
        <Switch value={false} />
      </View>
      <Divider />
    </View>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
     fontWeight:'400',
     fontSize:16,
     color:'black'
  }
});
