import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/constants';

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
                <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
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
    backgroundColor: Colors.Primary,
    padding: 20,
  },
  header: {
    fontSize: 22,
fontFamily:'Outfit-Bold',
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.secondary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: Colors.TextWhite,
    fontFamily: 'Outfit-Bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontFamily:'Outfit-Bold',
    color: Colors.TextWhite,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily:'Outfit-Regular',
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
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
    color: Colors.TextBlack,
    marginHorizontal: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: Colors.gray,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontFamily:'Outfit-Bold',
    color: Colors.TextWhite,
  },
  checkoutButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  checkoutText: {
    color: 'black',
    fontSize: 16,
   fontFamily:'Outfit-Bold',
  },
});
