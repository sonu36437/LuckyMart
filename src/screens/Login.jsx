import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CustomTextInput } from './SignUp';
import { COLORS } from '../constants/constants';

export default function Login() {
  const [email, setEmail] = useState('');
  const[password,setPassword]=useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Email:', email);
    navigation.navigate('Home');
  };

  return (

    <View style={styles.container} >
      <Text style={styles.title}>Welcome Back!</Text>


      <CustomTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        secureTextEntry={false}
        keyboardType="email-address"
        autoCapitalize="none"
        focusedInput={isInputFocused}
        setFocusedInput={setIsInputFocused}/>

    
      <CustomTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
        keyboardType="default"
        autoCapitalize="none"
        focusedInput={isInputFocused}
        setFocusedInput={setIsInputFocused}/>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Outfit-Bold',

    color: COLORS.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 20,
    backgroundColor: 'rgb(250,255,255)',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.2,

  },
  InputFocused: {
    borderWidth: 1,
    borderColor: 'black'

  },

  input: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    color: '#333',
  },
  loginButton: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',

  },
  loginButtonText: {
    fontSize: 14,
    fontFamily: 'Outfit-Bold',
    color: '#FFF',
  },
  signUpButton: {
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',

    color: COLORS.primary,
  },
});
