import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Header from '../../components/Header';
import sort_by from '../../assets/icons/sort_by.png';
import TransactionCard from '../../components/TransactionCard';
import Icon from 'react-native-vector-icons/Ionicons';

const OwnerAllTransaction = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  const sortOptions = [
    'New to Old transactions',
    'Old to New transactions',
    'Highest to Lowest transactions',
    'Lowest to Highest transactions',
  ];

  const handleSort = option => {
    setSelectedSort(option);
    setModalVisible(false); // Close modal after selecting
    console.log(`Selected Sort: ${option}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="All Transaction" navigation={navigation} />
      <View style={styles.sortContainer}>
        <Text style={styles.title}>Sort By Date</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={sort_by} style={styles.sortImg} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollviewStyle}>
        <View style={styles.transactionList}>
          {[...Array(10)].map((_, index) => (
            <TransactionCard
              key={index}
              paymentMethod="Credit Card"
              status="(Successful)"
              date="12/02/2023"
              amount="500.00"
            />
          ))}
        </View>
      </ScrollView>

      {/* Modal for Sorting Options */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.fakeBlurBackground} />
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Sort By</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close-circle-outline" size={28} color="white" />
              </TouchableOpacity>
            </View>
            {sortOptions.map((option, index) => (
              <Pressable
                key={index}
                style={styles.sortOption}
                onPress={() => handleSort(option)}>
                <View style={styles.sortOptionContainer}>
                  <Icon
                    name={
                      selectedSort === option
                        ? 'radio-button-on-outline'
                        : 'radio-button-off-outline'
                    }
                    size={20}
                    color="white"
                  />
                  <Text style={styles.sortOptionText}>{option}</Text>
                </View>
              </Pressable>
            ))}

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollviewStyle: {
    flex: 1,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#333333',
    paddingBottom: 20,
    marginHorizontal: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  sortImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  transactionList: {
    marginHorizontal: 10,
    marginVertical: 20,
    gap: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  fakeBlurBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  modalContent: {
    backgroundColor: '#111111',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
  },
  sortOption: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  sortOptionText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'KnulTrial-Regular',
    fontWeight: '500',
  },
  applyButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
  },
  sortOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default OwnerAllTransaction;
