import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '../../utils/colors'
import { ButtonPropsTypes } from './types'

const Button:FC<ButtonPropsTypes> = ({buttonText,onPress}) => {
  return (
 <TouchableOpacity onPress={onPress} style={{backgroundColor:Colors.primaryColors.primary,marginHorizontal:25,padding:10,borderRadius:8}}>
    <Text style={{fontSize:16,lineHeight:22,color:Colors.primaryColors.white,textAlign:'center',fontWeight:'700'}}>{buttonText}</Text>
 </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})