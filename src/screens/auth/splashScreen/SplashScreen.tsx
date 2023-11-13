import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../utils/colors'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation:any=useNavigation()
    const [language, setLanguage] = useState<number>(0)
  return (
    <View style={{flex:1,backgroundColor:Colors.primaryColors.white}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{marginBottom:'20%',fontSize:22,fontWeight:'bold'}}>Welcome to Hijaz App</Text>
        <Text style={{marginBottom:12,fontSize:18,fontWeight:'600'}}>Please Select a Language</Text>
<TouchableOpacity onPress={()=>setLanguage(0)}>
    <Text style={{fontSize:16,color:language === 0  ? Colors.primaryColors.primary : Colors.primaryColors.paleGrey,fontWeight:'500'}}>English</Text>
</TouchableOpacity>
<View style={{borderWidth:0.5,width:200,marginVertical:10,borderColor:Colors.primaryColors.paleGrey}}/>
<TouchableOpacity onPress={()=>setLanguage(1)}>
    <Text style={{fontSize:16,color:language === 1  ? Colors.primaryColors.primary : Colors.primaryColors.paleGrey,fontWeight:'500'}}>Urdu</Text>
</TouchableOpacity>
<View style={{borderWidth:0.5,width:200,marginVertical:10,borderColor:Colors.primaryColors.paleGrey}}/>
<TouchableOpacity onPress={()=>setLanguage(2)}>
    <Text style={{fontSize:16,color:language === 2  ? Colors.primaryColors.primary : Colors.primaryColors.paleGrey,fontWeight:'500'}}>Arabic</Text>
</TouchableOpacity>
<View style={{borderWidth:0.5,width:200,marginVertical:10,borderColor:Colors.primaryColors.paleGrey}}/>
</View>
<TouchableOpacity onPress={()=> navigation.navigate('signup')}>
<Text style={{marginBottom:15,alignSelf:'flex-end',marginRight:15,fontSize:18,color:Colors.primaryColors.primary,fontWeight:'700'}}>{'Next >>'}</Text>
</TouchableOpacity>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})