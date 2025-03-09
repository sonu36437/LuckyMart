import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useCartStore } from '../store/cart';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT_SIZES } from '../constants/constants';

export default function Cart() {
  const { cartItems, totalItems, totalcost } = useCartStore();
  const navigation = useNavigation();

  if (!cartItems || cartItems.length === 0) return null;

  const recentItems = cartItems.slice(-3);

  return (
    <View style={styles.cartContainer}>
      <View style={styles.imageStackContainer}>
        {recentItems.map((item, index) => (
          <Image 
            key={index} 
            source={{ uri: item.image }} 
            style={[styles.productImage, { left: index * 15 }]} 
          />
        ))}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.itemName}>Total Items: {totalItems}</Text>
        <Text style={styles.itemPrice}>Cost: ₹{totalcost.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.viewCartButton}
        onPress={() => navigation.navigate('cart')}
      >
        <Text style={styles.viewCartText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
    backgroundColor:'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  imageStackContainer: {
    flexDirection: 'row',
  
    width: 80,
    height: 60,

  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderColor:'black',
    borderWidth:1,
    position: 'absolute',
    aspectRatio: 1,
    resizeMode:'stretch'


 
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemName: {
    color: COLORS.black,
    fontSize: FONT_SIZES.medium,
    fontFamily: 'Outfit-Bold',
  },
  itemPrice: {
    color: COLORS.black,
    fontSize: FONT_SIZES.small,
    fontFamily: 'Outfit-Regular',
  },
  viewCartButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  viewCartText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small,
    fontFamily: 'Outfit-Bold',
  },
});
