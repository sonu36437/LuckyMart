import { View, Text } from 'react-native'
import React, { Children } from 'react'

export default function Button({childern,backgroundColor,color}) {
  return (
    <View style={{backgroundColor:backgroundColor,height:40,widht:80}} >
      {childern}
    </View>
  )
}