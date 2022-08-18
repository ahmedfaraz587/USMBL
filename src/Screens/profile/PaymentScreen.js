import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const PaymentScreen = () => {
  const paymentsDetail = [
    {
      image: require('../../assets/wine2.png'),
      date: 'Paid Apr 11',
      card: 'MasterCard ****1234',
      Location: 'London, UK',
      amount: '$100',
    },
    {
      image: require('../../assets/wine2.png'),
      date: 'Paid Apr 11',
      card: 'MasterCard ****1234',
      Location: 'London, UK',
      amount: '$100',
    },
  ];

  function renderItem({item}) {
    return (
      <View style={styles.paymentCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',width:'100%'}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={item.image} style={styles.paymentImage} resizeMode='contain' />
            </View>
            <View style={styles.paymentDetail}>
              <Text style={styles.paymentDate}>{item.date}</Text>
              <Text style={styles.bankCard}>{item.card}</Text>
              <Text style={styles.paymentLocation}>{item.Location}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.paymentAmount}>{item.amount}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.text}>All</Text>
        <View style={styles.topInnerView}>
          <Feather name="calendar" size={20} color="#000" />
          <Text style={{...styles.text, marginLeft: 8}}>Calender</Text>
        </View>
      </View>
      <FlatList
        data={paymentsDetail}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  topInnerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '95%',
    height: 120,
  },
  paymentImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  paymentDetail: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  paymentDate: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
  bankCard: {
    fontSize: 12,
    color: '#757575',
    marginTop:10
  },
  paymentLocation: {
    fontSize: 11,
    color: '#F87124',
    marginTop: 5,
  },
  paymentAmount: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    marginTop: 5,
  },
});
