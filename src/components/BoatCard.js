import React, {useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {getDatabase, ref, remove} from 'firebase/database';

const BoatCard = ({
  title,
  subtitle,
  onPressViewDetail,
  cardColor,
  customIcon,
  height,
  width,
  rate,
  listingId,
  onDelete,
}) => {
  const handleDeleteListing = useCallback(async () => {
    try {
      const database = getDatabase();
      const listingRef = ref(database, `listings/${listingId}`);
      await remove(listingRef);
      console.log(listingRef, 'listingRef');

      onDelete(listingId);
    } catch (error) {
      console.log(error);
    }
  }, [listingId, onDelete]);

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
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.rate}>{rate}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.detailBtn} onPress={onPressViewDetail}>
          <Text style={styles.detailBtnText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={handleDeleteListing}>
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
    paddingHorizontal: '10',
    marginVertical: 5,
  },
  card: {
    height: 86,
    width: 86,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'KnulTrial-Regular',
    lineHeight: 30,
    color: '#ffffff',
    marginRight: 10,
    width: 150,
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
    display: 'flex',
    gap: 20,
  },

  detailBtnText: {
    color: '#FFFFFF',
    fontFamily: 'KnulTrial-Regular',
    fontSize: 14,
    fontWeight: '500',
    height: 24,
  },
  removeBtnText: {
    color: '#CE5050',
    fontFamily: 'KnulTrial-Regular',
    fontSize: 14,
    fontWeight: '500',
    height: 24,
  },
});

export default BoatCard;
