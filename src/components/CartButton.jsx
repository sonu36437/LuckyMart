import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants/constants";

export default function CartButton({ 
  product, 
  onAdd, 
  onRemove, 
  count, 
  buttonStyle = {}, 
  textStyle = {} 
}) {
  return (
    <View style={styles.container}>
      {count > 0 ? (
        <View style={[styles.counterContainer, buttonStyle]}>
          <TouchableOpacity style={styles.counterButton} onPress={() => onRemove(product)}>
            <Ionicons name="remove" size={16} color="white" />
          </TouchableOpacity>
          <Text style={[styles.countText, textStyle]}>{count}</Text>
          <TouchableOpacity style={styles.counterButton} onPress={() => onAdd(product)}>
            <Ionicons name="add" size={16} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={[styles.addButton, buttonStyle]} onPress={() => onAdd(product)}>
          <Text style={[styles.addText, textStyle]}>Add To Cart</Text>
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
    backgroundColor: COLORS.primary,
    width: 110, 
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, 
  },
  addText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Outfit-Bold",
  },
  counterContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    width: 110, 
    paddingVertical: 6,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 3, 
  },
  counterButton: {
    paddingHorizontal: 10,
  },
  countText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Outfit-Bold",
  },
});
