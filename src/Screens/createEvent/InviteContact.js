import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RadioButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

const InviteContact = ({navigation}) => {
  const contacts = [
    {
      name: 'John Doe',
      pic: 'https://picsum.photos/100',
      value: true,
    },
    {
      name: 'Jane Doe',
      pic: 'https://picsum.photos/100',
      value: false,
    },
    {
      name: 'Cristian',
      pic: 'https://picsum.photos/100',
      value: true,
    },
    {
      name: 'clark kent',
      pic: 'https://picsum.photos/100',
      value: false,
    },
    {
      name: 'John Doe',
      pic: 'https://picsum.photos/100',
      value: true,
    },
    {
      name: 'Jane Doe',
      pic: 'https://picsum.photos/100',
      value: false,
    },
    {
      name: 'Cristian',
      pic: 'https://picsum.photos/100',
      value: true,
    },
    {
      name: 'clark kent',
      pic: 'https://picsum.photos/100',
      value: false,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={{uri: item.pic}} style={styles.image} />
          <Text style={styles.cardText}>{item.name}</Text>
        </View>
        <RadioButton
          status={item.value ? 'checked' : 'unchecked'}
          color="#F87124"
          uncheckedColor="#D1D1D1"
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Events</Text>
      </View>
      <View style={styles.searchBarView}>
        <Ionicons name="search" size={24} color="#979797" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#979797"
          placeholder="Search"
        />
      </View>
      <FlatList
        data={contacts}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <TouchableOpacity onPress={() => {}}>
        <LinearGradient
          style={{...styles.inviteButton, width: '95%', marginBottom: 40}}
          colors={['#FF9A58', '#F87124']}>
          <AntDesign name="adduser" size={24} color="white" />
          <Text style={styles.buttonText}>INVITE PEOPLE</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default InviteContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10,
  },
  searchBarView: {
    height: 60,
    backgroundColor: '#F5F5F5',
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  textInput: {
    color: 'black',
    marginLeft: 10,
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    padding: 10,
    margin: 5,
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#464646',
  },
  inviteButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 5,
    alignSelf:'center'
  },
});
