import { View, Text ,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import ProductCard from './ProductCart';
import { COLORS, FONT_SIZES } from '../constants/constants';
import { useNavigation } from '@react-navigation/native';
import Banner from './Banner';

export default function ProductWithCategory({ productsByCategory }) {
    const navigation=useNavigation();
  return (
    <View style={{flex:1}}>
  
      <FlatList
        data={productsByCategory}
        keyExtractor={(item) => item.category}
        contentContainerStyle={{ paddingBottom: 80 }}
        ListHeaderComponent={Banner}
        renderItem={({ item }) => (
          <View style={styles.categorySection}>
        
        
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>{item.category}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen', { category: item.category })}>
                <Text style={styles.moreButton}>More</Text>
              </TouchableOpacity>
            </View>
         

       
            <FlatList
              data={item.products}
              keyExtractor={(product) => product.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={true}
              overScrollMode='always'
              decelerationRate='fast'
              scrollEventThrottle={16}
              renderItem={({ item }) => (
                <ProductCard 
                  product={item} 
                  onAddToCart={(product) => console.log('Added to cart:', product)}
                />
              )}
              
              
            />
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  categorySection: {
    marginVertical: 2,
    paddingHorizontal: 0,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal:10,
  },
  categoryTitle: {
    color: 'black',
    fontSize: FONT_SIZES.medium,
    marginLeft:10,
    fontFamily:'Outfit-Bold',

  },
  moreButton: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily:'Outfit-Regular',
    textDecorationLine: 'underline',
  },
});
