import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, Divider} from 'react-native-paper';

const PaymentsMethod = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text1}>MasterCard 2912</Text>
        <Text style={styles.text2}>remove</Text>
      </View>
      <Divider />
      <View style={styles.row}>
        <Text style={styles.text1}>MasterCard 2912</Text>
        <Text style={styles.text2}>remove</Text>
      </View>
      <Divider />
      <TouchableOpacity>
        <Text style={styles.text3}>Add payment method</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentsMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  text1: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  text2: {
    color: '#979797',
    fontSize: 14,
  },
  text3: {
    fontSize: 16,
    fontWeight: '400',
    color: '#F87124',
    marginTop: 10,
    padding: 10,
  },
});
