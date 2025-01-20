import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { Dropdown } from 'react-native-element-dropdown';
import { COUNTRIES } from "../../strings/en";

const ContactUs = ({ navigation }) => {
    const [inputStates, setInputStates] = useState({});
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].value);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (text, inputName) => {
        setInputStates(prevState => ({
            ...prevState,
            [inputName]: text.trim(),
        }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Contact Us'} navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.title}>BBR Bass Boat Rentals, LLC</Text>
                <Text style={styles.subtitle}>96 Beach Walk Blvd, Conroe, Texas 77304, United States</Text>
                <Text style={styles.number}>936-276-7787</Text>
                <Text style={styles.mail}>info@BBRBassBoatRentals.com</Text>
                <View style={styles.form}>
                    <TextInput
                        placeholder="First Name"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'email')}
                    />
                    <TextInput
                        placeholder="Last Name"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'email')}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'email')}
                    />
                    <View style={styles.inputRow}>
                        <View style={styles.phoneInputContainer}>
                            <Dropdown
                                style={styles.dropdown}
                                data={COUNTRIES}
                                // labelField="label"
                                valueField="value"
                                value={selectedCountry}
                                onChange={item => {
                                    setSelectedCountry(item.value);
                                    setPhoneNumber(item.value);
                                }}
                                renderLeftIcon={() => (
                                    <Image
                                        source={{
                                            uri: COUNTRIES.find(c => c.value === selectedCountry)
                                                ?.flag,
                                        }}
                                        style={styles.flag}
                                    />
                                )}
                                renderItem={item => (
                                    <View style={styles.item}>
                                        <Image source={{ uri: item.flag }} style={styles.flag} />
                                    </View>
                                )}
                            />

                            <TextInput
                                style={styles.inputPhoneStyle}
                                placeholder="Enter phone number"
                                placeholderTextColor="#979797"
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={text =>
                                    setPhoneNumber(
                                        selectedCountry + text.replace(selectedCountry, ''),
                                    )
                                }
                            />
                        </View>
                    </View>
                    <TextInput
                        placeholder="Zip Code"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'email')}
                    />
                    <TouchableOpacity
                        style={styles.btnSubmit}>
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    content: {
        padding: 10
    },
    title: {
        color: '#A1A1A1',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'knultrial-regular',
        lineHeight: 21,
        marginTop: 20
    },
    subtitle: {
        color: '#585858',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'knultrial-regular',
        lineHeight: 21,
        marginVertical: 20
    },
    number: {
        color: '#A1A1A1',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'knultrial-regular',
        lineHeight: 21,
    },
    mail: {
        color: '#A1A1A1',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'knultrial-regular',
        lineHeight: 21,
        marginTop: 5
    },
    form: {
        marginTop: 20,
    },
    input: {
        backgroundColor: '#191919',
        height: 56,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: 'white',
    },
    dropdown: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#242424',
        flex: 0.2,
        borderRadius: 8,
    },
    flag: {
        width: 24,
        height: 18,
        borderRadius: 4,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'center',
    },
    inputPhoneStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        color: 'white',
        height: '100%',
        paddingLeft: 10,
    },
    phoneInput: {
        backgroundColor: '#191919',
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 10,
        color: 'white',
    },
    phoneInputContainer: {
        flexDirection: 'row',
        width: '70%',
        height: 50,
        marginVertical: 10,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#191919',
        borderRadius: 8,
        height: 50,
        marginVertical: 10,
    },
    btnSubmit: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    btnText: {
        color: '#111',
        fontSize: 16,
    },

});

export default ContactUs;