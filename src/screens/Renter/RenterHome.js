import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  Platform,
} from 'react-native';
import RenterHomeHeader from '../../components/RenterHomeHeader';
import NearbyCard from '../../components/NearbyCard';
import FilterModal from '../../components/FilterModal';
import boat1 from '../../assets/images/boat_img1.png';
import boat2 from '../../assets/images/boat_img2.png';

const RenterHome = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  const data = [
    {id: '1', title: 'Card 1'},
    {id: '2', title: 'Card 2'},
    {id: '3', title: 'Card 3'},
    {id: '4', title: 'Card 4'},
  ];

  const renderPopularItem = ({item}) => (
    <View style={{marginLeft: 5}}>
      <NearbyCard
        key={item.id}
        height="272"
        width="222"
        title="Pheonix 921 Elite"
        subtitle="13000 Calvary Rd, Wills, TX 77318, USA"
        img={boat2}
        people={'1-3 people'}
        position={'absolute'}
      />
    </View>
  );

  const renderNearByItem = ({item}) => (
    <View style={{marginLeft: 5}}>
      <NearbyCard
        key={item.id}
        height="130"
        width="151"
        title="Pheonix 921 Elite"
        subtitle="1 - 3 people"
        img={boat1}
        borderRadius="8"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <RenterHomeHeader
        onPress={() => setModalVisible(true)}
        onPressNavigation={() => navigation.navigate('Inbox')}
      />
      <View style={styles.content}>
        <View style={styles.popularContent}>
          <Text style={styles.title}>Popular</Text>
          <FlatList
            data={data}
            renderItem={renderPopularItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.nearByContent}>
          <View style={styles.row}>
            <Text style={styles.title}>Nearby</Text>
            <Text style={styles.title}>View All</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderNearByItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <FilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 20,
  },
  popularContent: {
    marginLeft: 10,
    marginTop: 40,
  },
  nearByContent: {
    marginLeft: 10,
    marginTop: 10,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 100 : 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginBottom: 20,
  },
});

export default RenterHome;
