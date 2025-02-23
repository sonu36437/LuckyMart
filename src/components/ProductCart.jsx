import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cart';
import CartInsideProductCard from './CartInsideProductCard';

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, cartItems } = useCartStore();


  const cartItem = cartItems.find((item) => item.id === product.id);
  const count = cartItem ? cartItem.itemCount : 0;

  return (
    <View style={styles.card}>
      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.price}>{'\u20B9'}{product.price}</Text>
      </View>

 
      <CartInsideProductCard 
        product={product} 
        onAdd={addToCart} 
        onRemove={removeFromCart} 
        count={count} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(247, 247, 237)',
    borderRadius: 15,
    padding: 15,
    width: 160, // Fixed: Changed from "160" to 160
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  details: {
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: 'black',
    fontFamily: 'Outfit-Bold',
    fontSize: 16,
  },
  price: {
    color: '#888',
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
  },
});
