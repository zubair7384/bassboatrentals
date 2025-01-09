import React from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import Header from '../../components/Header';
import BoatsGallery from '../../components/BoatsGallery';

const FilterBoatsList = ({navigation}) => {
  const data = Array(8).fill({});

  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <BoatsGallery onPress={() => navigation.navigate('MyboatsDetails')} />
      {/* <BoatsGallery onPress={() => console.log('onpress')} /> */}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Boats" navigation={navigation} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 15,
  },
});

export default FilterBoatsList;
