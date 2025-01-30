import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Header from '../../components/Header';
import {getListingLockDatesByID} from '../../firebase/firebaseUtils';
import {getDatabase, ref, push, remove} from 'firebase/database';
import {useRoute} from '@react-navigation/native';

const BoatManageAvailability = ({navigation}) => {
  const route = useRoute();
  const {id} = route.params ?? {};
  const [selectedRange, setSelectedRange] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [lockedDates, setLockedDates] = useState([]);

  useEffect(() => {
    console.log('Boat ID from route params:', id);

    const fetchLockedDates = async () => {
      try {
        const lockDates = await getListingLockDatesByID(id);
        if (lockDates) {
          const lockDatesArray = Object.entries(lockDates).map(
            ([lockId, date]) => {
              const start = date?.start_date ? new Date(date.start_date) : null;
              const end = date?.end_date ? new Date(date.end_date) : null;

              return {
                id: lockId,
                start:
                  start && !isNaN(start)
                    ? start.toISOString().split('T')[0]
                    : '',
                end: end && !isNaN(end) ? end.toISOString().split('T')[0] : '',
              };
            },
          );

          const validLockDates = lockDatesArray.filter(
            date => date.start && date.end,
          );

          setLockedDates(validLockDates);
        }
      } catch (error) {
        console.error('Error fetching locked dates:', error);
      }
    };

    if (id) {
      fetchLockedDates();
    }
  }, [id]);

  const handleDateSelect = date => {
    const selectedDate = date.dateString;

    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
      setSelectedRange({
        [selectedDate]: {
          selected: true,
          startingDay: true,
          endingDay: true,
          color: '#4A90E2',
          textColor: 'white',
        },
      });
    } else {
      const range = generateDateRange(startDate, selectedDate);
      setEndDate(selectedDate);
      setSelectedRange(range);
    }
  };

  const lockDates = async () => {
    if (startDate) {
      const formattedStartDate = new Date(startDate)
        .toISOString()
        .split('T')[0];
      const formattedEndDate = new Date(endDate || startDate)
        .toISOString()
        .split('T')[0];

      const newLockedDate = {
        start_date: formattedStartDate,
        end_date: formattedEndDate,
      };

      try {
        const dbRef = ref(getDatabase(), `listings/${id}/lockDates`);
        const newLockRef = await push(dbRef, newLockedDate);

        setLockedDates([
          ...lockedDates,
          {
            id: newLockRef.key,
            start: formattedStartDate,
            end: formattedEndDate,
          },
        ]);
        setStartDate(null);
        setEndDate(null);
        setSelectedRange({});
      } catch (error) {
        console.error('Error locking dates:', error);
      }
    }
  };

  const unlockDateRange = async lockId => {
    try {
      const dbRef = ref(getDatabase(), `listings/${id}/lockDates/${lockId}`);
      await remove(dbRef);

      setLockedDates(lockedDates.filter(lock => lock.id !== lockId));
    } catch (error) {
      console.error('Error unlocking date range:', error);
    }
  };

  const generateDateRange = (start, end) => {
    let range = {};
    let currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split('T')[0];
      range[dateStr] = {
        selected: true,
        color: '#4A90E2',
        textColor: 'white',
        startingDay: dateStr === start,
        endingDay: dateStr === end,
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return range;
  };

  const getLockedDates = () => {
    let marked = {...selectedRange};

    lockedDates.forEach(({start, end}) => {
      let currentDate = new Date(start);
      const endDate = new Date(end);

      while (currentDate <= endDate) {
        const dateStr = currentDate.toISOString().split('T')[0];

        marked[dateStr] = {
          disabled: true,
          color: '#444',
          textColor: '#ccc',
          startingDay: dateStr === start,
          endingDay: dateStr === end,
        };

        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    return marked;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Manage Availability'} navigation={navigation} />

      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.dateButtons}>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>
                {startDate ? startDate : 'Start Date'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>
                {endDate ? endDate : 'End Date'}
              </Text>
            </TouchableOpacity>
          </View>

          <Calendar
            style={styles.calendar}
            theme={{
              backgroundColor: '#333333',
              calendarBackground: '#222',
              textSectionTitleColor: '#fff',
              dayTextColor: '#fff',
              todayTextColor: '#4A90E2',
              selectedDayBackgroundColor: '#4A90E2',
              monthTextColor: '#fff',
              textDisabledColor: '#666',
              arrowColor: '#FF9500',
            }}
            markingType={'period'}
            markedDates={getLockedDates()}
            onDayPress={handleDateSelect}
          />

          <TouchableOpacity style={styles.lockButton} onPress={lockDates}>
            <Text style={styles.lockButtonText}>Lock Dates</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <Text style={styles.lockedDatesTitle}>Previous Locked Dates</Text>

          {lockedDates.map((range, index) => (
            <View key={index} style={styles.lockedDateRow}>
              <Text style={styles.lockedDateText}>
                {range.start && range.end
                  ? `${new Date(range.start).toDateString()} -- ${new Date(
                      range.end,
                    ).toDateString()}`
                  : 'Invalid Date'}
              </Text>

              <TouchableOpacity
                style={styles.unlockButton}
                onPress={() => unlockDateRange(range.id)}
                disabled={!range.start || !range.end}>
                <Text style={styles.unlockButtonText}>
                  {range.start && range.end ? 'Unlock' : 'Invalid'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
  },
  contentContainer: {
    padding: 15,
  },
  dateButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 10,
  },
  dateButton: {
    backgroundColor: '#448DFB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 44,
    flex: 1,
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'knultrial-regular',
  },
  lockButton: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    height: 52,
  },
  lockButtonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'knultrial-regular',
  },
  divider: {
    height: 1,
    backgroundColor: '#393939',
    marginVertical: 15,
  },
  lockedDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    height: 44,
    paddingHorizontal: 10,
  },
  unlockButton: {
    backgroundColor: '#000',
    paddingHorizontal: 15,
    borderRadius: 8,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unlockButtonText: {
    color: '#fff',
    fontFamily: 'knultrial-regular',
    fontSize: 16,
    fontWeight: '500',
  },
  lockedDateText: {
    color: '#111',
    fontFamily: 'knultrial-regular',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
});

export default BoatManageAvailability;
