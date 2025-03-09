import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import LargeCardForProduct from '../components/LargeCardForProduct'
import { COLORS, FONT_SIZES, FONTS } from '../constants/constants';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';


export default function SearchedProductScreen() {
  const [searching, setSearching] = useState(true);
  const [products, setProducts] = useState([])
const route= useRoute();
const SearchedItem=route.params;
console.log(SearchedItem);

  
  useEffect(() => {
    async function fetchProducts() {
      const res = (await axios.get(`https://dummyjson.com/products/search?q=${SearchedItem}`)).data;
      setProducts(res.products);
      setSearching(false);
    }
    fetchProducts();

  }, [])
  if (searching) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  }
  if (products.length<=0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text style={{color:COLORS.primary,fontFamily:FONTS.bold,fontSize:FONT_SIZES.medium,}}>No Such product found!</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, paddingTop: 10, backgroundColor: COLORS.white }}>


      <FlatList
        data={products}
        ListHeaderComponent={<Text style={{ paddingHorizontal: 20, color: COLORS.primary, fontFamily: FONTS.bold, fontSize: 20 }}>Result for {SearchedItem}</Text>}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <LargeCardForProduct product={item} />}
      />



    </View>
  )
}