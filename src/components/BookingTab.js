import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { CALENDAR_INFO } from "../strings/en";
import FilterCalendar from "./FilterCalendar";

const BookingTab = () => {
    const calendarOptions = ["Month", "Week", "Day", "Agenda"];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.legendContainer}>
                {CALENDAR_INFO.map((item, index) => (
                    <View style={styles.legendItem} key={index}>
                        <View style={[styles.legendCircle, { backgroundColor: item.color }]} />
                        <Text style={styles.legendText}>{item.label}</Text>
                    </View>
                ))}
            </View>

            {/* Calendar View Options */}
            <View>
                <View style={styles.calendarOptions}>
                    {calendarOptions.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.optionButton}>
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <FilterCalendar />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 16,
    },
    legendContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 20,
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 16,
        marginBottom: 10,
    },
    legendCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 8,
    },
    legendText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'knultrial-regular',
    },
    calendarOptions: {
        flexDirection: "row",
        gap: 10,
        justifyContent: 'center'
    },
    optionButton: {
        backgroundColor: "#FFF",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 4,
    },
    optionText: {
        color: '#111',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'knultrial-regular',
    },
});

export default BookingTab;
