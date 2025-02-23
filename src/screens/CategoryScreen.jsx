import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function CategoryScreen() {
    const route=useRoute();
    const param = route.params;
    console.log(param);
    
  return (
   
    <View>
      <Text>CategoryScreen</Text>
    </View>
  )
}