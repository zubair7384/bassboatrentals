import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
const FilterCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
    setSelectedDate(today);
  }, []);

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: '#121212', // Dark background for the entire calendar
          calendarBackground: '#333333', // Dark background for the calendar container
          textSectionTitleColor: '#ffffff', // Titles for days of the week (S, M, T, W, etc.)
          selectedDayTextColor: '#ffffff', // Text color for selected day
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
        current={selectedDate}
        onDayPress={day => {
          setSelectedDate(day.dateString);
          console.log('Selected day:', day);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#1E599C',
            selectedTextColor: '#ffffff',
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    marginTop: 20,
  },
  calendar: {
    borderWidth: 1,
    height: 350,
    width: 350,
    borderRadius: 11.45,
  },
});

export default FilterCalendar;
