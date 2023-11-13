import { Text, TextInput, View } from 'react-native'
import React, { FC } from 'react'
import { InputPropsTypes } from './types'
import { styles } from './styles'
import { Colors } from '../../utils/colors'

const Input:FC<InputPropsTypes> = ({onChangeText,placeholder,value,style}) => {
  return (
    <View style={{backgroundColor:Colors.primaryColors.secondary,     marginHorizontal:25,borderRadius:6,marginBottom:12}}>
<TextInput placeholderTextColor={Colors.primaryColors.paleGrey} style={[styles.input,style]} onChangeText={onChangeText} placeholder={placeholder} value={value}/>
    </View>
  )
}

export default Input
