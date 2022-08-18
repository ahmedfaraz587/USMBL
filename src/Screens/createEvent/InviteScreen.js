import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather';

const InviteScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Events</Text>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('InviteSocialMedia')}>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.iconView}>
              <Ionicons
                name="md-person-add-outline"
                size={24}
                color="#F87124"
                style={{
                  transform: [{scaleX: -1}],
                }}
              />
            </View>
            <Text style={styles.text}>From social Media</Text>
          </View>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('InviteContact')}>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.iconView}>
              <Feather name="users" size={24} color="#F87124" />
            </View>
            <Text style={styles.text}>From contacts</Text>
          </View>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InviteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //     backgroundColor: '#fff',
    padding: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10,
  },
  header: {
    marginBottom: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    height: 80,
    elevation: 5,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF2EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#464646',
  },
});
