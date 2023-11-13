import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'

const LoginScreen = () => {
  const navigation:any=useNavigation()
  const [signupDriver, setSignupDriver] = useState(false);
  return (
    <View style={{flex:1,backgroundColor:Colors.primaryColors.white}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:25}}>
        <Text style={{fontSize:28,fontWeight:'bold',lineHeight:34,color:Colors.primaryColors.primary}}>Login</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
        <Text style={{fontSize:18,fontWeight:'500',lineHeight:22,color:Colors.primaryColors.primary}}>Signup</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',backgroundColor:Colors.primaryColors.lightGrey,marginHorizontal:25,padding:2,marginBottom:10,justifyContent:'space-between',borderRadius:6}}>
            <TouchableOpacity onPress={()=>setSignupDriver(false)} style={{backgroundColor:signupDriver ? Colors.primaryColors.lightGrey :  Colors.primaryColors.white,padding:6,width:'49%',alignItems:'center',borderRadius:8}}>
                <Text style={{fontSize:18,color:!signupDriver ? Colors.primaryColors.primary : Colors.primaryColors.paleGrey,fontWeight:'500'}}>Visitor</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setSignupDriver(true)}  style={{backgroundColor:signupDriver ? Colors.primaryColors.white :Colors.primaryColors.lightGrey,padding:6,width:'50%',alignItems:'center',borderRadius:8}}>
                <Text style={{fontSize:18,color: signupDriver ? Colors.primaryColors.primary :Colors.primaryColors.paleGrey,fontWeight:'500'}}>Driver</Text>
            </TouchableOpacity>
        </View>
        <ScrollView>
          <Input placeholder='Mobile number'/>
          <Input placeholder='Password'/>
          <TouchableOpacity style={{marginBottom:10}}>
          <Text style={{alignSelf:'flex-end',marginRight:25,color:Colors.primaryColors.paleGrey,fontWeight:'500'}}>Forget Password?</Text>
          </TouchableOpacity>
          <Button onPress={()=>navigation.navigate('HomeScreen')} buttonText='Login'/>
        </ScrollView>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})