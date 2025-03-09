import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Input, Button } from '@rneui/themed';
import { COLORS, FONT_SIZES, FONTS } from '../constants/constants';

export default function AddAddressScreen() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [landmark, setLandmark] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.header}>Add New Address</Text> */}
      
      <Input placeholder='Full Name (Required*)' inputStyle={styles.input} value={fullName} onChangeText={setFullName} />
      <Input placeholder='Phone Number (Required*)' inputStyle={styles.input} keyboardType='phone-pad' value={phoneNumber} onChangeText={setPhoneNumber} />
      <Input placeholder='Address Line 1 (Required*)' inputStyle={styles.input} value={addressLine1} onChangeText={setAddressLine1} />
      <Input placeholder='Landmark (Required*)' inputStyle={styles.input} value={landmark} onChangeText={setLandmark} />
      <Input placeholder='Address Line 2 (Optional)' inputStyle={styles.input} value={addressLine2} onChangeText={setAddressLine2} />
      <Input placeholder='City (Required*)' inputStyle={styles.input} value={city} onChangeText={setCity} />
      <Input placeholder='State (Required*)' inputStyle={styles.input} value={state} onChangeText={setState} />
      <Input placeholder='Postal Code (Required*)' inputStyle={styles.input} keyboardType='numeric' value={postalCode} onChangeText={setPostalCode} />
      
      <Button title='Save Address' buttonStyle={styles.button} titleStyle={styles.buttonText} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: FONT_SIZES.large,
    fontFamily: FONTS.bold,
    color: 'black',
    marginBottom: 15,
  },
  input: {
    fontSize: FONT_SIZES.medium,
    fontFamily:FONTS.medium,
    color: 'black',
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 10,
  },
  buttonText: {
    fontSize: FONT_SIZES.medium,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
});
