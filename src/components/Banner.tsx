import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Banner={
  id?:number,
  title?:string,
  image?:string,
  link?:string,
  status?:boolean,
  created_at?:Date,
  updated_at?:Date,
}
interface BannerProps {
  Banners:Banner[],
}
export default function Banner({Banners}:BannerProps) {
   
  return (
    <View style={{height:200,backgroundColor:'red',width:'100%'}} >
     
    </View>
  )
}

const styles = StyleSheet.create({})