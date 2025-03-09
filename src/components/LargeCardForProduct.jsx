import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT_SIZES, FONTS } from '../constants/constants';

const ProductCard = ({ product }) => {
    const navigation = useNavigation();
    const renderStars = (rating) => {
        const stars = [];
        const fullStars=Math.round(product.rating);
        
        // const roundedRating = Math.round(rating * 2) / 2; 
          for(let i=1;i<=fullStars;i++){
            stars.push(
                <Ionicons name='star' color={COLORS.primary} size={14} key={i}/>
            )
          }
          for(let i=1;i<=5-fullStars;i++){
            stars.push(
                <Ionicons name='star-outline' color={COLORS.primary} size={14} key={i+fullStars}/>
            )
        }
  
        return stars;
    };

    return (
        <Pressable 
            style={styles.cardContainer} 
            onPress={() => navigation.navigate('productDetail', { product })}
        >
            <View style={styles.card}>
       
                <Image source={{ uri: product.image ||product.thumbnail}} style={styles.image} />

            
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
                    <Text style={styles.price}>{'\u20B9'} {product.price.toFixed(2)}</Text>

               
                    <View style={styles.ratingContainer}>
                        {renderStars(product.rating.rate)}
                        <Text style={styles.ratingText}>({product.rating.count} reviews)</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 12,
        marginBottom: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
   
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    details: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontFamily: FONTS.medium,
        fontSize: FONT_SIZES.medium,
        color: COLORS.black,
        marginBottom: 4,
    },
    price: {
        fontSize: FONT_SIZES.medium,
        fontFamily: FONTS.bold,
        color: COLORS.primary,
        marginBottom: 6,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    ratingText: {
        fontSize: FONT_SIZES.small,
        fontFamily: FONTS.regular,
        color: '#666',
        marginLeft: 4,
    },
});

export default ProductCard;
