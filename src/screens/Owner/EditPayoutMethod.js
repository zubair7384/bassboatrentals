import React from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { ScrollView } from "react-native";

const EditPayoutMethod = ({ navigation }) => {

    const handleInputChange = (text, inputName) => {
        setInputStates(prevState => ({
            ...prevState,
            [inputName]: text.trim(),
        }));
    };


    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Edit PayPal'} navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text style={styles.title}> Account Holder Information</Text>
                    <Text style={styles.subtitle}>Please enter the details associated with your Paypal account.</Text>
                    <TextInput
                        placeholder="Country"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'Country')}
                    />
                    <TextInput
                        placeholder="Currency"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'Currency')}
                    />
                    <TextInput
                        placeholder="First Name"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'First Name')}
                    />
                    <TextInput
                        placeholder="Last Name"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'Last Name')}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'Email')}
                    />
                    <TextInput
                        placeholder="Address"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'Address')}
                    />
                    <TextInput
                        placeholder="City"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'city')}
                    />
                    <TextInput
                        placeholder="State/Province"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'State/Province')}
                    />
                    <TextInput
                        placeholder="Zip code"
                        style={styles.input}
                        placeholderTextColor={'#979797'}
                        onChangeText={text => handleInputChange(text, 'Zip code')}
                    />
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.btnUpdate}>
                <Text style={styles.btnText}>Change Password</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    content: {
        padding: 15,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'KnulTrial-Regular',
        fontWeight: '700',
        lineHeight: 24
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'KnulTrial-Regular',
        fontWeight: '400',
        lineHeight: 24,
        marginVertical: 10
    },
    input: {
        backgroundColor: '#191919',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: 'white',
    },
    btnUpdate: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 15
    },
    btnText: {
        color: '#111',
        fontSize: 16,
        fontFamily: 'KnulTrial-Regular',
        fontWeight: '700',
        lineHeight: 24
    },
})

export default EditPayoutMethod;