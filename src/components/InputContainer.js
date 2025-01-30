import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputContainer = ({label, value, onChange, onBlur}) => {
  const [internalValue, setInternalValue] = useState(value || ''); // Local state

  const formatCurrency = text => {
    let cleaned = text.replace(/[^0-9.]/g, '');

    // Allow the first decimal but prevent multiple
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      cleaned = parts[0] + '.' + parts.slice(1).join('');
    }

    // Ensure decimal stays even if no numbers follow
    if (cleaned.endsWith('.')) {
      return `$${cleaned}`;
    }

    // Limit to 2 decimal places
    if (cleaned.includes('.')) {
      const [integer, decimal] = cleaned.split('.');
      cleaned = `${integer}.${decimal.substring(0, 2)}`;
    }

    // Prevent leading zeros (except decimals like 0.50)
    if (
      cleaned.length > 1 &&
      cleaned.startsWith('0') &&
      !cleaned.startsWith('0.')
    ) {
      cleaned = cleaned.replace(/^0+/, '');
    }

    return cleaned ? `$${cleaned}` : '';
  };

  const handleTextChange = text => {
    const formatted = formatCurrency(text);
    setInternalValue(formatted);
    onChange(formatted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder="$0.00"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={internalValue}
        onChangeText={handleTextChange}
        onBlur={onBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    height: 56,
    justifyContent: 'center',
  },
  label: {
    color: '#777',
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
  },
});

export default InputContainer;
