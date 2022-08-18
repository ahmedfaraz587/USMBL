import React from 'react';
import {Text, Image, View, FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

const MessagesScreen = ({navigation}) => {
  const messagedUser = [
    {
      image: 'https://picsum.photos/100',
      name: 'John Doe',
      lastMessage: 'I will invite her too',
      lastChatingTime: '12m',
    },
    {
      image: 'https://picsum.photos/100',
      name: 'Bruce Wayne',
      lastMessage: 'Hello',
      lastChatingTime: '12m',
    },
    {
      image: 'https://picsum.photos/100',
      name: 'Clark Kent',
      lastMessage: 'I will invite her too',
      lastChatingTime: '12m',
    },
    {
      image: 'https://picsum.photos/100',
      name: 'Peter Parker',
      lastMessage: ' 4 kayaks completed already❤😎',
      lastChatingTime: '12m',
    },
  ];

  function renderItem({item}) {
    return (
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate('ChatRoom')}>
          <View style={styles.item}>
            <View style={{flexDirection: 'row'}}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
            </View>
            <Text style={styles.lastChatingTime}>{item.lastChatingTime}</Text>
          </View>
        </TouchableOpacity>
        <Divider />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={messagedUser}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop:5,
    marginBottom:5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 2,
  },
  lastMessage: {
    color: '#8D8D99',
    fontSize:14
  },
});
