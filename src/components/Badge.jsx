import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONT_SIZES } from '../constants/constants'

export default function Badge({placeholder,color='red',backgroundColor=COLORS.white}) {
  return (
    <View style={{position:'absolute', top:0,backgroundColor:backgroundColor,zIndex:1,padding:4,borderRadius:30}}>
      <Text style={{color:color ,fontFamily:'Outfit-Bold',fontSize:FONT_SIZES.small}}>{placeholder}</Text>
    </View>
  )
}