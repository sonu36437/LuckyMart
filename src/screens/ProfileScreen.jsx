import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/constants';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Sections */}
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.section}>
          <Ionicons name="cart-outline" size={26} color={COLORS.black} />
          <Text style={styles.sectionText}>Orders</Text>
          <Ionicons name="chevron-forward-outline" size={22} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}
        onPress={()=>{
          navigation.navigate('Address');
        }}
        >
          <Ionicons name="location-outline" size={26} color={COLORS.black} />
          <Text style={styles.sectionText}>Address</Text>
          <Ionicons name="chevron-forward-outline" size={22} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <Ionicons name="person-outline" size={26} color={COLORS.black}/>
          <Text style={styles.sectionText}>Profile Details</Text>
          <Ionicons name="chevron-forward-outline" size={22} color={COLORS.black}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <Ionicons name="settings-outline" size={26} color={COLORS.black} />
          <Text style={styles.sectionText}>Settings</Text>
          <Ionicons name="chevron-forward-outline" size={22} color={COLORS.black} />
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={[styles.section, styles.logout]}>
          <Ionicons name="log-out-outline" size={26} color={COLORS.white} />
          <Text style={[styles.sectionText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: COLORS.primary,
    fontSize: 24,
    fontFamily: 'Outfit-Bold',
  },
  profileContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  sectionText: {
    flex: 1,
    fontSize: 18,
    color: COLORS.black,
    fontFamily: 'Outfit-Regular',
    marginLeft: 15,
  },
  logout: {
    borderBottomWidth: 0,
    marginTop: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
  },
  logoutText: {
    color: 'rgb(250, 14, 14)',
    fontFamily: 'Outfit-Bold',
  },
});
