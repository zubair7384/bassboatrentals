import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Pagination = ({totalPages, currentPage, onPageChange}) => {
  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
        disabled={currentPage === 1}
        onPress={() => onPageChange(currentPage - 1)}>
        <Icon name="chevron-back-sharp" size={20} color="#C4CDD5" />
      </TouchableOpacity>

      {Array.from({length: totalPages}, (_, index) => (
        <TouchableOpacity
          key={index + 1}
          style={[
            styles.pageNumber,
            currentPage === index + 1 && styles.activePage,
          ]}
          onPress={() => onPageChange(index + 1)}>
          <Text
            style={[
              styles.pageText,
              currentPage === index + 1 && styles.activeText,
            ]}>
            {index + 1}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.pageButton,
          currentPage === totalPages && styles.disabledButton,
        ]}
        disabled={currentPage === totalPages}
        onPress={() => onPageChange(currentPage + 1)}>
        <Icon name="chevron-forward-sharp" size={20} color="#C4CDD5" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#76848D',
    width: 37,
    height: 37,
  },
  pageNumber: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 37,
    height: 37,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center',
  },
  activePage: {
    borderColor: '#CC5500',
  },
  pageText: {
    fontSize: 16,
    color: '#36454F',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  activeText: {
    color: '#CC5500',
  },
  disabledButton: {
    backgroundColor: '#ffffff',
  },
});

export default Pagination;
