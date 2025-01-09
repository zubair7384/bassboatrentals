import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import profileImage from '../../assets/images/profile_image.jpeg';

const data = [
  {
    id: '1',
    name: 'Magnas Chalsan',
    message: 'Lorem Ipsum idea sum?',
    time: '12:40 PM',
    image: profileImage,
    unreadCount: 3,
  },
  {
    id: '2',
    name: 'Gukash Guru',
    message: 'Lorem Ipsum idea sum?',
    time: '1:40 PM',
    image: profileImage,
    unreadCount: 0,
  },
  {
    id: '3',
    name: 'Ding Liren',
    message: 'Lorem Ipsum idea sum?',
    time: '11:40 PM',
    image: profileImage,
    unreadCount: 0,
  },
  {
    id: '4',
    name: 'Alexander',
    message: 'Lorem Ipsum idea sum?',
    time: '05:40 PM',
    image: profileImage,
    unreadCount: 1,
  },
  {
    id: '5',
    name: 'Ian Nepo',
    message: 'Lorem Ipsum idea sum?',
    time: '09:40 PM',
    image: profileImage,
    unreadCount: 0,
  },
  {
    id: '6',
    name: 'Karim',
    message: 'Lorem Ipsum idea sum?',
    time: '09:40 PM',
    image: profileImage,
    unreadCount: 0,
  },
];

const Inbox = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.messageContainer}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.messageContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Inbox'} navigation={navigation} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  message: {
    color: '#888',
    fontSize: 14,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  unreadBadge: {
    backgroundColor: '#222222',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Inbox;
