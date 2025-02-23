import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../components/HomeHeader';
import ProductCard from "../components/ProductCart";
import ProductWithCategory from '../components/ProductWithCategory';
import Cart from '../components/Cart';
import Banner from '../components/Banner';

const productsByCategory = [
  {
    category: 'Smartwatches',
    products: [
      {
        id: '1',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
      {
        id: '2',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
      {
        id: '3',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
      {
        id: '4',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
    ],
  },
  {
    category: 'Shoes',
    products: [
      {
        id: '3',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
      {
        id: '4',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
      {
        id: '5',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
    ],
  },
  {
    category: 'test',
    products: [
      {
        id: '1',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
      {
        id: '99',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
      {
        id: '44',
        name: 'Apple Watch',
        price: 399,
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/s/f/-original-imah6s6pdkac5zzj.jpeg?q=70&crop=false',
      },
    ],
  },
];

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <HomeHeader />
  
      <ProductWithCategory productsByCategory={productsByCategory} />
      <Cart/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  categorySection: {
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 15,
    fontFamily:'Outfit-Bold',

  },
  moreButton: {
    color: '#ccc',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
