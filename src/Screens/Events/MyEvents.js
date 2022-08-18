import {
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const MyEvents = () => {
  const items = [
    {
      id: 1,
      image: require('../../assets/event/pic1.png'),
      title: 'Wine tasting London tour',
      date: '10 Jun, 2 a.m-2 p.m',
    },
    {
      id: 2,
      image: require('../../assets/event/pic2.png'),
      title: 'Kayaking with picnic',
      date: '10 Jun, 2 a.m-2 p.m',
    },
    {
      id: 3,
      image: require('../../assets/event/pic3.png'),
      title: 'Let’s make a BBQ and rock jam party',
      date: '10 Jun, 2 a.m-2 p.m',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.text}>All</Text>
        <View style={styles.topInnerView}>
          <Icon name="calendar" size={20} color="#000" />
          <Text style={{...styles.text, marginLeft: 8}}>Calender</Text>
        </View>
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default MyEvents;

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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 20,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    width: 200,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#F87124',
    fontWeight:'500'
  },
});
