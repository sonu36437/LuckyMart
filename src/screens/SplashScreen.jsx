import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants/constants'

export default function SplashScreen() {
  return (
    <View style={style.container}>
      <Text style={{color:COLORS.white,fontFamily:FONTS.bold}}>LuckyMart</Text>
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.primary
    }
})