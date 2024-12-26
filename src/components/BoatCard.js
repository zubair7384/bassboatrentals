import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const BoatCard = ({
  title,
  subtitle,
  onPressViewDetail,
  onPressDelete,
  cardColor,
  customIcon,
  height,
  width,
  rate,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, {backgroundColor: cardColor}]}>
        {customIcon &&
          (typeof customIcon === 'number' ? (
            <Image
              source={customIcon}
              style={{height: height, width: width, borderRadius: 8}}
            />
          ) : (
            customIcon
          ))}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.rate}>{rate}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.detailBtn} onPress={onPressViewDetail}>
          <Text style={styles.detailBtnText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeBtn} onPress={onPressDelete}>
          <Text style={styles.removeBtnText}>Remove Boat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: 129,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '20',
    paddingVertical: 10,
  },
  card: {
    height: 86,
    width: 86,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'KnulTrial-Regular',
    lineHeight: 30,
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    color: '#ffffff',
    marginTop: 2,
    height: 16,
  },
  rate: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    color: '#ffffff',
    marginTop: 2,
    height: 16,
  },
  textContainer: {
    marginLeft: 20,
  },
  arrow: {
    position: 'absolute',
    right: 10,
  },
  btnContainer: {
    marginLeft: 'auto',
  },

  detailBtnText: {
    color: '#FFFFFF',
    fontFamily: 'KnulTrial-Regular',
    fontSize: 15,
    fontWeight: '500',
    height: 24,
  },
  removeBtnText: {
    color: '#CE5050',
    fontFamily: 'KnulTrial-Regular',
    fontSize: 15,
    fontWeight: '500',
    height: 24,
  },
});

export default BoatCard;
