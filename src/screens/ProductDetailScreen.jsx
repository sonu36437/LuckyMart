import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, FONT_SIZES } from '../constants/constants';
import { useCartStore } from '../store/cart';
import CartButton from '../components/CartButton';
import { color } from '@rneui/base';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { width, height } = Dimensions.get('window');

export default function ProductDetailScreen() {
    const route = useRoute();
    const { product } = route.params;
    console.log(product);
    const navigation=useNavigation();
    const{cartItems,addToCart,removeFromCart}= useCartStore();
    const isInCart= cartItems.find((item)=>item.id===product.id);
    const count= isInCart?isInCart.itemCount:0;
    
    const images = [
        product.image,
        'https://via.placeholder.com/600x400.png?text=Image+2',
        'https://via.placeholder.com/600x400.png?text=Image+3', 
    ];
    useEffect(() => {
        if (product.category) {
            navigation.setOptions({ title: product.category });
        }
    }, [product.category, navigation]);

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.detailsContainer} showsVerticalScrollIndicator={false}>
            <ScrollView 
                horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator={false} 
                style={styles.imageScroll}
                contentContainerStyle={styles.imageContainer}
            >
                {images.map((img, index) => (
                    <Image key={index} source={{ uri: img }} style={styles.productImage} />
                ))}
            </ScrollView>
            <View style={{paddingHorizontal:10 ,}}>
                <View style={{flexDirection:'row', marginBottom:10}} >
                <Text style={{fontFamily:'Outfit-Bold', color:COLORS.black}}>Brand:</Text>
                <Text style={{fontFamily:'Outfit-Regular', color:COLORS.black}}> Puma</Text>
                </View>

                <Text style={styles.title}>{product.title}</Text>
                <View style={styles.priceRow}>
                    <View>
                    <Text style={styles.price}>Price: ₹ {product.price}</Text>
                    <Text style={{fontFamily:'Outfit-Bold', fontSize:FONT_SIZES.large,color:COLORS.primary}}>Now At : ₹ {product.price}</Text>
                    </View>
                 { product.discountPercentage &&
                    <Text>Discount: {product?.discountPercentage}%</Text>}
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Product Information</Text>
                    <Text style={styles.infoText}>✔ Category: {product.category}</Text>
                    <Text style={styles.infoText}>✔ Availability: In Stock</Text>
                    <Text style={styles.infoText}>✔ Warranty: 1 Year Manufacturer Warranty</Text>
                    <Text style={styles.infoText}>✔ Return Policy: 10 Days Easy Return</Text>
                </View>
                </View>
            </ScrollView>

        <View style={styles.buttonContainer}>
            <TouchableOpacity>
                <View style={styles.buyNowButton}>
                    <Text style={styles.buyNowText}>Buy Now</Text>
                </View>
            </TouchableOpacity>
            <CartButton
                product={product}
                onAdd={addToCart}
                onRemove={removeFromCart}
                count={count}
                buttonStyle={styles.cartButton}
                textStyle={{color:'white', fontSize:14}}
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.white,
        // paddingHorizontal:5,
    },
    imageScroll: {
        height: 350, 
        backgroundColor: 'transparent',
    },
    imageContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    productImage: {
        width: width-10,  
        height: height/3,  
        resizeMode: 'contain',  
    },
    detailsContainer: {
        paddingBottom: 80, 
    },
    title: {
        fontSize: FONT_SIZES.medium,
        fontFamily: 'Outfit-Bold',
        color: '#333',
    
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    price: {
        fontSize: FONT_SIZES.large,
        fontFamily: 'Outfit-Bold',
        color:COLORS.black,
        textDecorationLine: 'line-through',
    

  
    },
    section: {
        marginBottom: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Outfit-Bold',
        color: '#333',
        marginBottom: 5,
    },
    description: {
        fontSize: FONT_SIZES.small,
        fontFamily: 'Outfit-Regular',
        color: '#555',
        lineHeight: 22,
    },
    infoText: {
        fontSize: FONT_SIZES.small,
        fontFamily: 'Outfit-Regular',
        color: '#444',
        marginBottom: 4,
    },
    buttonContainer: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
     
    },
    buyNowButton: {
        backgroundColor:COLORS.primary,
        width: width / 2,
        height: 55,
        // borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buyNowText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Outfit-Bold',
    },
    cartButton: {
        borderRadius: 2,
        width: width / 2,
        height: 55,
        backgroundColor:COLORS.black,
        // borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
