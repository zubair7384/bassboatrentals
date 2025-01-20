import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import Header from '../../components/Header';
import { PAYOUTMETHOD_TEXT } from "../../strings/en";

const Setting = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Account');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleInputChange = (text, inputName) => {
        setInputStates(prevState => ({
            ...prevState,
            [inputName]: text.trim(),
        }));
    };


    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Settings'} navigation={navigation} />
            <View style={styles.content}>
                <View style={styles.tabContent}>
                    <View style={styles.tabsContainer}>
                        <TouchableOpacity
                            style={[styles.tabButton, activeTab === 'Account' && styles.activeTab]}
                            onPress={() => setActiveTab('Account')}>
                            <Text style={[styles.tabText, activeTab === 'Account' && { color: '#fff' }]}>Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, activeTab === 'Security' && styles.activeTab]}
                            onPress={() => setActiveTab('Security')}>
                            <Text style={[styles.tabText, activeTab === 'Security' && { color: '#fff' }]}>Security</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, activeTab === 'Payout Account' && styles.activeTab]}
                            onPress={() => setActiveTab('Payout Account')}>
                            <Text style={[styles.tabText, activeTab === 'Payout Account' && { color: '#fff' }]}>Payout Account</Text>
                        </TouchableOpacity>
                    </View>

                    {activeTab === 'Account' && (
                        <View style={styles.acctForm}>
                            <View style={styles.inputRow}>
                                <TextInput
                                    placeholder="First Name"
                                    style={styles.inputHalf}
                                    placeholderTextColor={'#979797'}
                                    onChangeText={text => handleInputChange(text, 'firstName')}
                                />
                                <TextInput
                                    placeholder="Last Name"
                                    style={styles.inputHalf}
                                    placeholderTextColor={'#979797'}
                                    onChangeText={text => handleInputChange(text, 'lastName')}
                                />
                            </View>
                            <View style={styles.choseFileContainer}>
                                <Text style={styles.choseFileTitle}>Profile Picture</Text>
                                <TouchableOpacity>
                                    <View style={styles.choseFile}>
                                        {profilePicture ? (
                                            <Text style={styles.choseFileText} numberOfLines={1}>
                                                {profilePicture.fileName || 'Selected File'}
                                            </Text>
                                        ) : (
                                            <Text style={styles.choseFileText}>Choose File</Text>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                placeholder="Email"
                                style={styles.input}
                                placeholderTextColor={'#979797'}
                                onChangeText={text => handleInputChange(text, 'email')}
                            />
                            <TextInput
                                placeholder="Phone Number"
                                style={styles.input}
                                placeholderTextColor={'#979797'}
                                onChangeText={text => handleInputChange(text, 'Phone Number')}
                            />
                            <TouchableOpacity
                                style={styles.btnSubmit}
                                onPress={() => navigation.navigate('')}>
                                <Text style={styles.btnText}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {activeTab === 'Security' && (
                        <View style={styles.acctForm}>
                            <TextInput
                                placeholder="New Password"
                                style={styles.input}
                                placeholderTextColor={'#979797'}
                                onChangeText={text => handleInputChange(text, 'New Password')}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                style={styles.input}
                                placeholderTextColor={'#979797'}
                                onChangeText={text => handleInputChange(text, 'Confirm Password')}
                            />
                            <TouchableOpacity
                                style={styles.btnSubmit}
                                onPress={() => navigation.navigate('')}>
                                <Text style={styles.btnText}>Change Password</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {activeTab === 'Payout Account' && (
                        <View>
                            <Text style={styles.payoutTitle}>Payout Method</Text>
                            <Text style={styles.payoutSubtitle}>{PAYOUTMETHOD_TEXT}</Text>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity
                                    style={styles.btnEdit}
                                    onPress={() => navigation.navigate('EditPayoutMethod')}>
                                    <Text style={styles.btnEditText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnDel}>
                                    <Text style={styles.btnDelText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    acctForm: {
        flex: 1,
    },
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    content: {
        paddingHorizontal: 15,
        flex: 1
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: '#262720',
        borderRadius: 26,
        height: 40,
        marginVertical: 10,
        borderBottomWidth: 1
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeTab: {
        borderColor: '#fff',
        borderRadius: 8,
        borderRadius: 26,
        borderBottomWidth: 2
    },
    tabText: {
        color: '#A1A1A1',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'knultrial-regular',
    },
    tabContent: {
        flex: 1
    },
    input: {
        backgroundColor: '#191919',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: 'white',
    },

    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    inputHalf: {
        backgroundColor: '#191919',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: 'white',
        flex: 1,
    },
    choseFileTitle: {
        color: '#979797',
    },
    choseFileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#191919',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    choseFile: {
        backgroundColor: '#242424',
        borderRadius: 5,
        padding: 10,
        minWidth: 100,
        maxWidth: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    choseFileText: {
        color: '#979797',
        fontSize: 14,
    },
    btnSubmit: {
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
    payoutTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'knultrial-regular',
        marginTop: 10

    },
    payoutSubtitle: {
        color: '#A1A1A1',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'knultrial-regular',
        marginVertical: 10
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 15,
    },
    btnEdit: {
        backgroundColor: '#FCEACE',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        flex: 1,
        height: 48
    },
    btnEditText: {
        color: '#000',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'knultrial-regular',
        lineHeight: 24,
        textAlign: 'center'
    },
    btnDel: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        flex: 1,
        height: 48
    },
    btnDelText: {
        color: '#000',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'knultrial-regular',
        lineHeight: 24,
        textAlign: 'center'
    },

});

export default Setting;