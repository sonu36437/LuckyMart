import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useCartStore } from '../store/cart';
import CartInsideProductCard from './CartInsideProductCard';

const { width, height } = Dimensions.get('window'); // Get device width & height

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, cartItems } = useCartStore();

  const cartItem = cartItems.find((item) => item.id === product.id);
  const count = cartItem ? cartItem.itemCount : 0;

  return (
    <View style={styles.card}>
      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />

 
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        
        {/* Discount & Price */}
        <View style={styles.priceRow}>
          {product.discount && (
            <Text style={styles.discountPrice}>
              {'\u20B9'}{(product.price - (product.price * product.discount) / 100).toFixed(2)}
            </Text>
          )}
          <Text style={[styles.price, product.discount && styles.strikeThrough]}>
            {'\u20B9'}{product.price}
          </Text>
          {product.discount && <Text style={styles.discountTag}>{product.discount}% OFF</Text>}
        </View>

        {/* Rating & Stock Status */}
        {/* <View style={styles.extraDetails}>
          <Text style={styles.rating}>⭐ {product.rating || '4.5'}</Text>
          <Text style={[styles.stockStatus, product.stock > 0 ? styles.inStock : styles.outOfStock]}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </Text>
        </View> */}
      </View>

      {/* Add to Cart Section */}
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
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    width: width * 0.42,
    height: height * 0.33, 
    alignItems: 'center',
    margin: 0,
 
  },
  image: {
    width: '90%',
    aspectRatio: 1,
    resizeMode: 'contain', 
    borderRadius: 8,
  },
  details: {
    alignItems: 'center',
    marginVertical: 5,
  },
  name: {
    color: 'black',
    fontSize: 14,
    fontFamily:"Outfit-Bold",
    textAlign: 'center',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  price: {
    color: '#555',
    fontSize: 13,
    fontFamily:'Outfit-Regular'
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discountPrice: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
  },
  discountTag: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  extraDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 3,
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black'
  },
  stockStatus: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  inStock: {
    color: 'green',
  },
  outOfStock: {
    color: 'red',
  },
});
