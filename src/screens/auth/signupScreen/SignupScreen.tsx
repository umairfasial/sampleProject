import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../../../components/input/Input'
import { Colors } from '../../../utils/colors'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'

const SignupScreen = () => {
    const navigation:any=useNavigation()
    const [signupDriver, setSignupDriver] = useState(false);
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:25}}>
        <Text style={{fontSize:28,fontWeight:'bold',lineHeight:34,color:Colors.primaryColors.primary}}>Signup</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
        <Text style={{fontSize:18,fontWeight:'500',lineHeight:22,color:Colors.primaryColors.primary}}>Login</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',backgroundColor:Colors.primaryColors.lightGrey,marginHorizontal:25,padding:2,marginBottom:10,justifyContent:'space-between',borderRadius:6}}>
            <TouchableOpacity onPress={()=>setSignupDriver(false)} style={{backgroundColor:signupDriver ? Colors.primaryColors.lightGrey :  Colors.primaryColors.white,padding:6,width:'49%',alignItems:'center',borderRadius:8}}>
                <Text style={{fontSize:18,color:!signupDriver ? Colors.primaryColors.primary : Colors.primaryColors.paleGrey,fontWeight:'500'}}>Visitor</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>setSignupDriver(true)}  style={{backgroundColor:signupDriver ? Colors.primaryColors.white :Colors.primaryColors.lightGrey,padding:6,width:'50%',alignItems:'center',borderRadius:8}}>
                <Text style={{fontSize:18,color: signupDriver ? Colors.primaryColors.primary :Colors.primaryColors.paleGrey,fontWeight:'500'}}>Driver</Text>
            </TouchableOpacity>
        </View>
        <ScrollView>
        <Input placeholder={'First name'}/>
        <Input placeholder={'Last name'}/>
        <Input placeholder={'Nationality'}/>
        <Input placeholder={'Mobile number'}/>
        <Input placeholder={'Password'}/>
        <Input placeholder={'Confirm Password'}/>
        <Button onPress={()=>navigation.navigate('login')} buttonText='Signup'/>

        </ScrollView>

    </View>
  )
}

export default SignupScreen
