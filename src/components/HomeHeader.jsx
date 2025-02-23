import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/constants';

export default function HomeHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>Hii, User</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-circle-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar (Navigates to Search Page on Click) */}
      <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('Search')}>
        <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
        <Text style={styles.searchPlaceholder}>Search for Items</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    width: '100%',
    
    height: 120,
    backgroundColor: Colors.Primary,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  userText: {
    color: Colors.TextWhite,
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    paddingLeft: 12,
    height: 45,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#888',
    fontFamily: 'Outfit-Regular',
  },
});
