import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-paper';

const NotificationScreen = () => {
  const notifications = [
    {
      profileImage: 'https://picsum.photos/100',
      text: 'John Doe invited you to a group chat',
      time: '2hr',
    },
    {
      profileImage: 'https://picsum.photos/100',
      text: 'Jane Jane accept your invitation to event “Wine tastion Londin tour”',
      time: '2hr',
    },
    {
      profileImage: 'https://picsum.photos/100',
      text: 'Jane Jane accept your invitation to event “Wine tastion Londin tour”',
      time: '2hr',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
              marginBottom: 5,
            }}>
            <Image source={{uri: item.profileImage}} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <Text>{item.time}</Text>
        </TouchableOpacity>
        <Divider />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    color: 'black',
    width: 200,
  },
});
