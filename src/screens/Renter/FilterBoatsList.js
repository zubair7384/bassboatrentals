import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import SliderCard from '../../components/SliderCard';
import { ScrollView } from 'react-native-gesture-handler';

const FilterBoatsList = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title='Boats' navigation={navigation} />
            <View style={styles.boatsContainer}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'center', gap: 20 }}>
                        <SliderCard onPress={() => navigation.navigate('MyboatsDetails')} />
                        <SliderCard />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'center', gap: 20 }}>
                        <SliderCard />
                        <SliderCard />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'center', gap: 20 }}>
                        <SliderCard />
                        <SliderCard />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'center', gap: 20 }}>
                        <SliderCard />
                        <SliderCard />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    scrollviewStyle: {
        padding: 10,
    },
    boatsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20
    }
});

export default FilterBoatsList;