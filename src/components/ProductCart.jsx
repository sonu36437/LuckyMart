import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useCartStore } from '../store/cart';
import CartButton from './CartButton';
import { COLORS, FONT_SIZES } from '../constants/constants';
import { useNavigation } from '@react-navigation/native';
import Badge from './Badge';

const { width, height } = Dimensions.get('window');

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, cartItems } = useCartStore();
  const navigation = useNavigation();

  const cartItem = cartItems.find((item) => item.id === product.id);
  const count = cartItem ? cartItem.itemCount : 0;

  return (

    <View style={styles.card}>

      <Pressable onPress={() => {
        navigation.navigate('productDetail', { product })
      }}>

        <Image source={{ uri: product.image }} style={styles.image} />
        <Badge placeholder="Discount Avalible" color='green' />


        <View style={styles.details}>
          <Text style={styles.name} numberOfLines={1}>{product.title}</Text>


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


        </View>
      </Pressable>



      <CartButton
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
    padding: 10,
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
    fontSize: FONT_SIZES.small,
    fontFamily: "Outfit-Medium",
    textAlign: 'center',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  price: {
    color: COLORS.black,
    fontSize: FONT_SIZES.medium,
    fontFamily: 'Outfit-Bold'
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
