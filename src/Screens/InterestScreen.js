import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const InterestScreen = ({navigation}) => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };
  const items = [
    {
      name: 'music',
      image: require('../assets/Music.png'),
    },
    {
      name: 'sport',
      image: require('../assets/Sport.png'),
    },
    {
      name: 'food',
      image: require('../assets/Food.png'),
    },
    {
      name: 'party',
      image: require('../assets/Party.png'),
    },
    {
      name: 'art',
      image: require('../assets/Art.png'),
    },
    {
      name: 'children',
      image: require('../assets/Childrens.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select your Interest</Text>
      <View style={styles.flatlistView}>
        <FlatList
          data={items}
          numColumns={2}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  onSelectedItemsChange(selectedItems.concat(item))
                }>
                <View style={styles.item}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={()=> navigation.navigate('Location')}>
          <Text style={styles.btnText}>skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Location')}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InterestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    padding: 13,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 130,
    height: 130,
  },
  itemText: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
    color: '#000000',
    textAlign: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
    width: '100%',
  },
  flatlistView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
  },
  btnText: {
    color: 'black',
    fontSize: 16,
  },
});
