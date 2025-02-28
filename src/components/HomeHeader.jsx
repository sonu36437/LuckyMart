import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, Colors, FONT_SIZES } from '../constants/constants';
import { Skeleton } from '@rneui/themed';

export default function HomeHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>Hii, User</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={20} color="white" />
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
  
    backgroundColor:'rgb(31, 91, 136)',
    paddingVertical: 15,
    paddingHorizontal: 10,
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
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontFamily: 'Outfit-Medium',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingLeft: 12,
    height: 45,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    fontSize:FONT_SIZES.small,
    color: COLORS.black,
    fontFamily: 'Outfit-Regular',
  },
});
