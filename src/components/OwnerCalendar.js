import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

const OwnerCalendar = () => {
  //   const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.bookingTitle}>
        <View style={styles.titleContainer}>
          <View style={styles.circleToday} />
          <Text style={styles.title}>Today</Text>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.circleBooked} />
          <Text style={styles.title}>Booked</Text>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.circleAvailable} />
          <Text style={styles.title}>Available</Text>
        </View>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          theme={{
            backgroundColor: '#121212', // Dark background for the entire calendar
            calendarBackground: '#333333', // Dark background for the calendar container
            textSectionTitleColor: '#ffffff', // Titles for days of the week (S, M, T, W, etc.)
            selectedDayTextColor: '#ffffff', // Text color for selected day
            todayTextColor: '#ffffff', // Text color for today's date
            dayTextColor: '#e6e6e6', // Normal day text color
            textDisabledColor: '#555555', // Disabled day text color
            dotColor: '#00adf5', // Dot color on marked dates
            arrowColor: '#FF9500', // Color of navigation arrows
            monthTextColor: '#ffffff', // Month name text color
            indicatorColor: '#ffffff', // Small indicator for the current month
            textDayFontSize: 16, // Font size for day numbers
            textMonthFontSize: 18, // Font size for month title
            textDayHeaderFontSize: 14, // Font size for day headers
          }}
          current={'2024-12-21'}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          markedDates={{
            '2024-12-21': {
              selected: true,
              selectedColor: '#1E599C', // Today's date color (rounded background)
              selectedTextColor: '#ffffff',
            },
            '2024-12-22': {
              selected: true,
              selectedColor: '#FF9500', // Available date color (rounded background)
              selectedTextColor: '#ffffff',
            },
            '2024-12-23': {
              selected: true,
              selectedColor: '#D00404', // Booked date color (rounded background)
              selectedTextColor: '#ffffff',
            },
            '2024-12-24': {
              selected: true,
              selectedColor: '#FF9500', // Another available date color (rounded background)
              selectedTextColor: '#ffffff',
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  bookingTitle: {
    flexDirection: 'row',
  },
  circleToday: {
    width: 15,
    height: 15,
    backgroundColor: '#1E599C',
    borderRadius: '100%',
    marginRight: 10,
  },
  circleBooked: {
    width: 15,
    height: 15,
    backgroundColor: '#D00404',
    borderRadius: '100%',
    marginRight: 10,
  },
  circleAvailable: {
    width: 15,
    height: 15,
    backgroundColor: '#FF9500',
    borderRadius: '100%',
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'knultrial-regular',
    fontWeight: '500',
  },
  calendarContainer: {
    marginTop: 20,
  },
  calendar: {
    borderWidth: 1,
    height: 350,
    borderRadius: 11.45,
  },
});

export default OwnerCalendar;
