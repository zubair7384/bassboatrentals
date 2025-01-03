import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatIcon from '../assets/icons/chat.png';
import NotificationIcon from '../assets/icons/Notification.png';

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#fff" style={styles.icon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Icon
          name="filter-outline"
          size={20}
          color="#fff"
          style={styles.icon}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={ChatIcon} />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={NotificationIcon} />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 10,
    height: 40,
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 5,
    fontFamily: 'KnulTrial-Regular',
  },
  icon: {
    marginHorizontal: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    gap: 10,
  },
  notificationDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f00',
  },
});

export default SearchBar;
