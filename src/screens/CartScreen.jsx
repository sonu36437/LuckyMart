import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONT_SIZES } from '../constants/constants';

export default function CartScreen() {
  const { cartItems, totalcost, addToCart, removeFromCart } = useCartStore();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty!</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />

              <View style={styles.itemDetails}>
                <Text style={styles.itemName} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.itemPrice}>{'\u20B9'}{item.price}</Text>
              </View>

        
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.controlButton}>
                  <Ionicons name="remove" size={20} color="black" />
                </TouchableOpacity>

                <Text style={styles.itemCount}>{item.itemCount}</Text>

                <TouchableOpacity onPress={() => addToCart(item)} style={styles.controlButton}>
                  <Ionicons name="add" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

  
      {cartItems.length > 0 && (
        <View style={styles.bottomContainer}>
          <Text style={styles.totalText}>Total: {'\u20B9'}{totalcost}</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  header: {
    fontSize: FONT_SIZES.medium,
fontFamily:'Outfit-Bold',
    textAlign: 'center',
    marginBottom: 20,
    color: COLORS.primary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.black,
    fontFamily: 'Outfit-Bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: FONT_SIZES.small,
    fontFamily:'Outfit-Bold',
    color: COLORS.black,
  },
  itemPrice: {
    fontSize: FONT_SIZES.medium,
    fontFamily:'Outfit-Regular',
    color: COLORS.black,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  controlButton: {
    padding: 5,
  },
  itemCount: {
    fontSize: 18,
    fontFamily:'Outfit-Regular',
    color: COLORS.black,
    marginHorizontal: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
 
    borderColor: COLORS.black,
    marginTop: 10,
  },
  totalText: {
    fontSize: FONT_SIZES.medium,
    fontFamily:'Outfit-Bold',
    color: COLORS.black,
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  checkoutText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
   fontFamily:'Outfit-Bold',
  },
});
