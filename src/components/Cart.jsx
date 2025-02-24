import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useCartStore } from '../store/cart';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

export default function Cart() {
  const { cartItems } = useCartStore();
  const navigation = useNavigation();

  if (!cartItems || cartItems.length === 0) return null;

  const lastItem = cartItems[cartItems.length - 1];



  return (
    <View style={styles.animatedContainer}>


      <BlurView intensity={70} tint='systemMaterialDark' experimentalBlurMethod='dimezisBlurView' style={styles.cartContainer}>
        <Image source={{ uri: lastItem.image }} style={styles.productImage} />

        <View style={styles.textContainer}>
          <Text style={styles.itemName} numberOfLines={1}>{lastItem.name}</Text>
          <Text style={styles.itemPrice}>{'\u20B9'}{lastItem.price}</Text>
        </View>

        <TouchableOpacity
          style={styles.viewCartButton}
          onPress={() => {
            if (navigation) {
              navigation.navigate('cart'); 
            } else {
              console.error('Navigation is undefined');
            }
          }}
        >
          <Text style={styles.viewCartText}>View Cart</Text>
        </TouchableOpacity>
      </BlurView>
      </View>

  );
}

const styles = StyleSheet.create({
  animatedContainer: {
    position: 'absolute',
     bottom:0,
    alignItems: 'center',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: 50,
    height: 50,
    aspectRatio:1,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
  },
  itemPrice: {
    color: 'white',
    fontSize: 14,
    fontFamily:'Outfit-Regular'
  },
  viewCartButton: {
    backgroundColor: 'rgb(31, 91, 136)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  viewCartText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
