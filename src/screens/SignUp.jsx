import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation ,CommonActions} from '@react-navigation/native';

export const CustomTextInput = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, autoCapitalize, focusedInput, setFocusedInput, borderColor }) => (
  <View style={[styles.inputContainer, focusedInput === label && styles.inputFocused, borderColor && { borderColor }]}>
    <TextInput
      style={styles.input}
      onFocus={() => setFocusedInput(label)}
      onBlur={() => setFocusedInput(null)}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#888"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}adb
      autoCapitalize={autoCapitalize}
    />
  </View>
);

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const navigation = useNavigation();
  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   

    const fields = [
      { value: name, message: 'Please enter your full name' },
      { value: email, message: 'Please enter your email' },
      { value: phone, message: 'Please enter your phone number' },
      { value: password, message: 'Please enter your password' },
      { value: confirmPassword, message: 'Please confirm your password' },
    ];
  
    for (const field of fields) {
      if (!field.value) {
        Alert.alert('Error', field.message);
        return;
      }
    }
  
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    const isValidEmail = (email) => emailRegex.test(email);

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'MailVerification' }],

      })
    )
  
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account!</Text>

      <CustomTextInput
        label="name"
        value={name}
        onChangeText={setName}
        placeholder="Enter your full name"
        autoCapitalize="words"
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
      />
      <CustomTextInput
        label="email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
      />
      <CustomTextInput
        label="password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
      />
      <CustomTextInput
        label="confirmPassword"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
        secureTextEntry
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
        borderColor={password && confirmPassword && password !== confirmPassword ? 'red' : 'gray'}
      />
      <CustomTextInput
        label="phone"
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
      />

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Send verification link</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9FB',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Outfit-Bold',
    color: 'black',
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    backgroundColor: 'rgb(250,255,255)',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    color: '#333',
  },
  signUpButton: {
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    fontSize: 14,
    fontFamily: 'Outfit-Bold',
    color: '#FFF',
  },
  loginButton: {
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    color: 'gray',
  },
});
