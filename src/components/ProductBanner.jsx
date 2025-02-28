import { View, Text } from 'react-native'
import React from 'react'

export default function ProductBanner({product}) {
  return (
    <View>
      <Text>{product}</Text>
    </View>
  )
}