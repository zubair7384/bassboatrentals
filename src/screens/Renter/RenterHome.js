import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, FlatList} from 'react-native';
import SearchBar from '../../components/Searchbar';
import SliderCard from '../../components/SliderCard';
import NearbyCard from '../../components/NearbyCard';

const RenterHome = () => {
  const data = [
    {id: '1', title: 'Card 1'},
    {id: '2', title: 'Card 2'},
    {id: '3', title: 'Card 3'},
    {id: '4', title: 'Card 4'},
  ];

  const renderPopularItem = ({item}) => <SliderCard key={item.id} />;
  const renderNearByItem = ({item}) => <NearbyCard key={item.id} />;

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View>
        <Text style={styles.title}>Popular</Text>
        <View>
          <FlatList
            data={data}
            renderItem={renderPopularItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        <Text style={styles.title}>Nearby</Text>
        <View>
          <FlatList
            data={data}
            renderItem={renderNearByItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'KnulTrial-Regular',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 40,
    color: '#fff',
    height: 40,
    marginTop: 20,
  },
  flatListContent: {
    paddingVertical: 10,
  },
});

export default RenterHome;
