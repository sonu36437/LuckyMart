import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute, useNavigation, CommonActions } from '@react-navigation/native';

export default function VerificationScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route);
  

  useEffect(() => {

    setTimeout(() => {
   
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          
          routes: [{ name: 'Auth' }],
        })
      );
    }, 3000); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification in Progress</Text>
      <Text style={styles.subtitle}>Please wait while we are verifying you.</Text>
      <ActivityIndicator size="large" color="black" style={styles.loader} />
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
    fontSize: 24,
    fontFamily: 'Outfit-Bold',
    color: 'black',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});
