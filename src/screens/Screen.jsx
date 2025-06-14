import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/constants';
import { useNavigation } from '@react-navigation/native';
import debounce from '../utils/throttleFunction';




const mockSuggestions = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple', 'Strawberry', 'Blueberry'];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigation = useNavigation();
  const inputRef = useRef(null); 

  useEffect(() => {

    setTimeout(() => {
      inputRef.current?.focus();
      console.log("focuesed");
      
    }, 100);
    return ()=>{
      console.log("umounted");
      

    }
  }, []);
  useEffect(()=>{

    let timeout;
  timeout=  setTimeout(()=>{
      console.log(searchText);
      
      

    },300)
    return ()=>{
      clearTimeout(timeout);
    }
  },[searchText])

  const handleSearch = (text) => {
    setSearchText(text);
    setSuggestions(
      text ? mockSuggestions.filter((item) => item.toLowerCase().includes(text.toLowerCase())) : []
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            ref={inputRef} // Attach the reference here
            style={styles.searchInput}
            placeholder="Search for products..."
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={handleSearch}
            onSubmitEditing={() => {
              navigation.navigate('SearchedProduct',searchText);
            }}
          />
        </View>
      </View>

      {suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.suggestionItem} onPress={() => setSearchText(item)}>
                <Ionicons name="search-outline" size={18} color="#444" />
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
  },
  suggestionsContainer: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  suggestionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
