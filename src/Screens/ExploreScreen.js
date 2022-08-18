import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import BottomSheet from '@gorhom/bottom-sheet'

const ExploreScreen = () => {
  const [search, setSearch] = React.useState('');
  const items = [
    {
      date: 'Mon, June 17 ',
      text: 'Kayaking the Thames',
      icon: 'pluscircleo',
      btnText: 'Join',
      image: require('../assets/postbackgroundimage1.png'),
    },
    {
      date: 'Mon, June 17 ',
      text: 'Wine tasting London tour',
      icon: 'pluscircleo',
      btnText: 'Join',
      image: require('../assets/postbackgroundimage2.png'),
    },
    {
      date: 'Mon, June 17 ',
      text: 'Kayaking the Thames',
      icon: 'pluscircleo',
      btnText: 'Join',
      image: require('../assets/postbackgroundimage1.png'),
    },
    {
      date: 'Mon, June 17 ',
      text: 'Wine tasting London tour',
      icon: 'pluscircleo',
      btnText: 'Join',
      image: require('../assets/postbackgroundimage2.png'),
    },
  ];

  const items2 = [
    {
      image: require('../assets/wine1.png'),
      date: '10 Jun',
      text: 'Toscan style dinner in organic farm',
    },
    {
      image: require('../assets/wine2.png'),
      date: '10 Jun',
      text: 'Wine tasting London tour',
    },
    {
      image: require('../assets/wine1.png'),
      date: '10 Jun',
      text: 'Toscan style dinner in organic farm',
    },
    {
      image: require('../assets/wine2.png'),
      date: '10 Jun',
      text: 'Wine tasting London tour',
    },
  ];

  function renderItem({item}) {
    return (
      <View style={styles.postView2}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textView}>
          <LinearGradient
            colors={['#FF9A58', '#F87124']}
            style={styles.dateView}>
            <Text style={styles.date}>{item.date}</Text>
          </LinearGradient>
          <Text style={styles.text2}>{item.text}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.cont1} colors={['#FF9A58', '#F87124']}>
        <View style={{flexDirection: 'row', marginTop: 65}}>
          <View style={styles.textInputView}>
            <Image
              source={require('../assets/icons/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="search"
              placeholderTextColor="#979797"
              style={styles.searchInput}
              onChangeText={text => setSearch(text)}
            />
            <TouchableOpacity>
              <Icon name="location" size={27} color="#979797" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.filterIconView}>
            <Icon2 name="filter" size={24} color="#F87124" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {search.length > 0 ? (
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
              marginTop: 25,
              marginLeft: 15,
            }}>
            Result
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#F87124'}}>
              {' '}
              "{search}"
            </Text>
          </Text>
          <View style={{marginTop: 20}}>
            <FlatList
              data={items2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
      ) : (
        <View style={styles.cont2}>
          <FlatList
            data={items}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.postView}>
                <ImageBackground
                  style={styles.imageView}
                  source={item.image}
                  resizeMode="contain">
                  <View style={{padding: 15}}>
                    <Text style={styles.dateText}>{item.date}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                    <TouchableOpacity>
                      <View style={styles.postButtonView}>
                        <AntDesign name={item.icon} size={20} color="white" />
                        <Text style={{marginLeft: 14, color: 'white'}}>
                          {item.btnText}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      )}
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  cont1: {
    //     flex: 0.15,
    height: 100,
    backgroundColor: 'red',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 10,
    width: '100%',
  },
  imageView: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    //     alignItems: 'center',
  },
  cont2: {
    padding: 10,
    marginTop: 5,
  },
  textInputView: {
    flexDirection: 'row',
    width: '75%',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 15,
    borderRadius: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  searchInput: {
    width: '70%',
    height: 60,
    marginLeft: 10,
    color: '#979797',
  },
  filterIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '13%',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 5,
  },
  postView: {
    width: '100%',
    //     borderRadius: 20,
    marginBottom: 15,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  postButtonView: {
    flexDirection: 'row',
    backgroundColor: '#F87124',
    width: 90,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  postView2: {
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
    // width:'90%'
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dateView: {
    marginTop: -19,
    marginLeft: 15,
    backgroundColor: 'red',
    width: 43,
    height: 43,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    textAlign: 'center',
    width: 30,
    fontSize: 14,
    fontWeight: '700',
    padding: 3,
    color: 'white',
  },
  text2: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 10,
    color: 'black',
  },
  textInputView: {
    flexDirection: 'row',
    width: '75%',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 15,
    borderRadius: 10,
  },
});
