import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import Header from "../../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import howItWorks from '../../assets/images/howitworksimage.png'

const HowItWorks = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'How It Works'} navigation={navigation} />
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>How the App Works</Text>
                    <Text style={styles.subtitle}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
                    <Image source={howItWorks} style={styles.img} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>How the App Works</Text>
                    <Text style={styles.subtitle}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
                    <Image source={howItWorks} style={styles.img} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    content: {
        padding: 10,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        fontFamily: 'knultrial-regular',
        marginTop: 20
    },
    subtitle: {
        color: '#A1A1A1',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        fontFamily: 'knultrial-regular',
        marginTop: 10
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginTop: 20
    }
});

export default HowItWorks;