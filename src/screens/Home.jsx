import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../components/HomeHeader';
import ProductCard from "../components/ProductCart";
import ProductWithCategory from '../components/ProductWithCategory';
import Cart from '../components/Cart';
import Banner from '../components/Banner';
import { Skeleton } from '@rneui/base';

import axios from 'axios';

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
  const [prod, setProd] = useState([]);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const category = (await axios.get('https://fakestoreapi.com/products/categories')).data;
        console.log(category);

        const productsByCategory = await Promise.all(
          category.map(async (category) => {
            const products = (await axios.get(`https://fakestoreapi.com/products/category/${category}`)).data;
            return { category, products };
          })
        );

        setProd(productsByCategory);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategory();
  }, []);



  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>


      <HomeHeader />
      
      {prod.length <= 0 && <View style={{
        marginTop: 4,
        borderRadius: 20,
        padding: 6,
        overflow: 'hidden',
        flexDirection: 'column',

      }}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Skeleton
            key={index}
            height={160}
            width={'100%'}
            style={{ marginBottom: 4, borderRadius: 20 }}
          />
        ))}
      </View>}




      <ProductWithCategory productsByCategory={prod} />
      <Cart />


    </View>
  );
}

const styles = StyleSheet.create({
  categorySection: {
    marginVertical: 6,
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
    fontFamily: 'Outfit-Bold',

  },
  moreButton: {
    color: '#ccc',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
