import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const RatingStar = ({
  totalStars = 5,
  value = 0,
  onRatingChange,
  isReadOnly = false,
  title,
}) => {
  const [rating, setRating] = useState(value);

  useEffect(() => {
    setRating(value);
  }, [value]);

  const handlePress = index => {
    if (isReadOnly) {
      return;
    }

    const newRating = index + 1;
    setRating(newRating);

    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ratingTitle}>{title}</Text>
      <View style={styles.ratingContainer}>
        {Array.from({length: totalStars}, (_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            disabled={isReadOnly}>
            <Icon
              name={index < rating ? 'star' : 'staro'}
              size={20}
              color={index < rating ? '#FFD700' : '#d3d3d3'}
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 5,
  },
  ratingTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    marginBottom: 5,
    height: 24,
  },
});

export default RatingStar;
