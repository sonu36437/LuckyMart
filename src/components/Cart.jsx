import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import React from 'react';
import { useCartStore } from '../store/cart';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/constants';

export default function Cart() {
  const { cartItems } = useCartStore();
  const navigation = useNavigation();

 
  const lastItem = cartItems.length > 0 ? cartItems[cartItems.length - 1] : null;

  if (!lastItem) return null; 
  const translateY = new Animated.Value(100);
  Animated.timing(translateY, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
    <View style={styles.cartContainer}>

      <Image source={{ uri: lastItem.image }} style={styles.productImage} />


      <View style={styles.textContainer}>
        <Text style={styles.itemName} numberOfLines={1}>{lastItem.name}</Text>
        <Text style={styles.itemPrice}>{'\u20B9'}{lastItem.price}</Text>
      </View>

   
      <TouchableOpacity style={styles.viewCartButton} onPress={() => navigation.navigate('cart')}>
        <Text style={styles.viewCartText}>View Cart</Text>
      </TouchableOpacity>
    </View>
    </Animated.View>
  
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    position: 'absolute',
    bottom: 20,
   
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:  'black',
    width: '100%',
    height: 85,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderTopEndRadius: 27,
    borderTopStartRadius: 27,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    color: 'white',
    fontFamily: 'Outfit-Bold',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: 'white',
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
  },
  viewCartButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  viewCartText: {
    color: 'black',
    fontSize: 14,
   fontFamily: 'Outfit-Bold',
  },
});
