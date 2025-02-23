import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CartInsideProductCard({ product, onAdd, onRemove, count }) {
  return (
    <View style={styles.container}>
      {count > 0 ? (
        <View style={styles.counterContainer}>
      
          <TouchableOpacity style={styles.counterButton} onPress={() => onRemove(product)}>
            <Ionicons name="remove" size={18} color="white" />
          </TouchableOpacity>

     
          <Text style={styles.countText}>{count}</Text>

         
          <TouchableOpacity style={styles.counterButton} onPress={() => onAdd(product)}>
        <Ionicons name="add" size={18} color="white" />

          </TouchableOpacity>
        </View>
      ) : (
      
        <TouchableOpacity style={styles.addButton} onPress={() => onAdd(product)}>
      
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  addButton: {
    flexDirection: "row",
    width:100,
    backgroundColor: "black",
    padding:10,
     alignItems:'center',
     justifyContent:'center',
    borderRadius: 30,
    
  },
  addText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
    marginLeft: 5,
  },
  counterContainer: {
    flexDirection: "row",
    width:150,
    backgroundColor: "black",
    padding:4,
     alignItems:'center',
     justifyContent:'center',
    borderRadius: 30,
  },
  counterButton: {
    padding: 5,
  },
  countText: {
    color: "white",
    fontFamily:'Outfit-Bold',
    fontSize: 12,
    marginHorizontal: 10,
  },
});
