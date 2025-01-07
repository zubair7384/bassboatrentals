import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HEADER_HEIGHT } from '../utils/dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const FilterHeader = ({ title, onPressClose, onPressBack }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={onPressBack}>
                    <Icon name="arrow-back" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onPressClose} style={styles.closeBtn} >
                <Icon name="close-circle-outline" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: HEADER_HEIGHT || 48,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'KnulTrial-Regular',
        height: 24,
        textAlignVertical: 'center'
    },
    backButton: {
        marginRight: 10,
        height: 24,
        width: 24,
    },
    closeBtn: {

    }
});

export default FilterHeader;
