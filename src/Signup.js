import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [Ename, setEName] = useState(false);
    const [Eemail, setEEmail] = useState(false);
    const [Epassword, setEPassword] = useState(false);
    const [Emobile, setEMobile] = useState(false);

    const saveData = async () => {

        await AsyncStorage.setItem('Name', name);
        await AsyncStorage.setItem('Email', email);
        await AsyncStorage.setItem('Mobile', mobile);
        await AsyncStorage.setItem('Password', password);
    }
const Validation = () => {
    if (email == ''){
        setEEmail(true);
    }else{
        setEEmail(false)
    }

    if (name == ''){
        setEName(true);
    }else{
        setEName(false)
    }

    if (mobile == ''){
        setEMobile(true);
    }else{
        setEMobile(false)
    }

    if (password == ''){
        setEPassword(true);
    }else{
        setEPassword(false)
    }

    if(email !== '' && mobile !== '' && password !== '' && mobile !== '' )
    {
         saveData();
        navigation.goBack();
    }
    else{
        Alert.alert('please enter a details')
    }
}

    return (
        <View>
            <Image source={require('../src/Images/8997261.jpg')} style={styles.image} />

            <View style={styles.pagestyle}>

                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>

                </Text>

            </View>

            <View style={styles.positions}>
                <MaterialCommunityIcons name="email-edit-outline" size={24} color="black" />
                <TextInput style={styles.inputstyle} placeholder='Enter username'
                    value={name}
                    onChangeText={(text) => setName(text)} />
                {
                    Ename === true && (<Text style={styles.alert}>Please enter a name</Text>)
                }


                <TextInput style={styles.inputstyle} placeholder='Enter email'
                    value={email}
                    onChangeText={(text) => setEmail(text)} />
                {
                    Eemail === true && (<Text style={styles.alert}>Please enter an email</Text>)
                }


                <TextInput style={styles.inputstyle} placeholder='Enter Mobile no.'
                    value={mobile}
                    onChangeText={(text) => setMobile(text)} />
                {
                    Emobile === true && (<Text style={styles.alert}>Please enter a mobile</Text>)
                }

                <TextInput style={styles.inputstyle} placeholder='Enter passWord'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)} />
                {
                    Epassword === true && (<Text style={styles.alert}>Please enter a password</Text>)
                }


                <Pressable onPress={Validation}>
                    <Text style={styles.buttonstyle}>
                        Signup
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    pagestyle: {
        backgroundColor: '#D7D0FF',
        height: 500, width: 340,
        position: 'absolute',
        marginTop: 100
        , margin: 10, borderRadius: 20,
        opacity: 0.7
    },
    inputstyle: {
        borderColor: '#BFB9E2',
        borderWidth: 2, margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 10, marginLeft: 50
        , height: 50, width: 250
    },
    buttonstyle: {
        backgroundColor: '#FDCA54', padding: 15,
        textAlign: 'center', marginLeft: 105,
        marginRight: 50, marginTop: 10,
        fontSize: 25, borderRadius: 15
    },
    positions: {
        position: 'absolute', marginTop: 150
    },
    image: {
        height: 800, width: 370, resizeMode: 'stretch'
        , marginRight: 100, alignItems: 'center'
    },
    alert:{
        color:'red',marginLeft:55

    }
})