import React, { useState } from "react";

import { View, Text, ScrollView, Image, StyleSheet, Dimensions, Alert,  TextInput } from "react-native";

import { Button } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { auth } from "../mainfb/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";


const { width, height } = Dimensions.get("window")

export default function LoginPage({ route, navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const loginFunction = () => {
        setLoading(true)
        auth;
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            showMessage({
                message: "Successufly Lgin!",
                type: "success",
            })
            navigation.navigate('Me')
        })
            .catch(er => showMessage({
                message: "Ivalid details provide!",
                type: "danger",
            })).finally(() => setLoading(false))
    }
    return (
        <View style={LoginStyle.totalConatiner}>
            <ScrollView style={{flex:1}}>
                <StatusBar />
                <View style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    <Text style={{
                        color:"#111",
                        fontSize:18,
                        paddingBottom:2,

                    }}>Email Address</Text>
                    <TextInput
                    placeholder={"Enter Email Address"}
                        value={email}
                        onChangeText={val => setEmail(val)}
                        activeOutlineColor="#35439c"
                        style={{
                            textAlign: "left",
                            justifyContent: 'flex-end',
                            padding: 20,
                            marginBottom: 10,
                            width: width * 0.8,
                            backgroundColor: "#FFFF",
                            borderWidth:0.5,
                            borderRadius:5,
                            borderColor:"gray",
                        }}
                        keyboardType='email-address'
                        maxLength={255}
                        mode='outlined'
                        inputMode='email'
                        clearButtonMode='while-editing'
                    />
                      <Text 
                      style={{
                        color:"#111",
                        fontSize:18,
                        paddingBottom:2,
                      }}
                      >password</Text>
                    <TextInput
                     placeholder="Enter your Password"
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                        activeOutlineColor="#35439c"
                        style={{
                            textAlign: "left",
                            justifyContent: 'flex-end',
                            padding: 20,
                            marginBottom: 10,
                            width: width * 0.8,
                            backgroundColor: "#FFFF",
                            borderWidth:0.5,
                            borderColor:"gray",
                            borderRadius:5,
                        }}

                        secureTextEntry={true}
                        maxLength={30}
                        mode='outlined'

                        clearButtonMode='while-editing'
                       
                    />
                </View>

                <Button
                    disabled={password ? false : true}
                    loading={loading}
                    onPress={loginFunction}
                    style={LoginStyle.buttStyle}
                    buttonStyle={LoginStyle.buttStyle}
                    iconRight={true}
                    icon={() => <Icons name='login' size={20} color="white" />} title={"login"} />

                <View style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignContent: "space-between",
                        width: width * 0.98,

                    }
                }>
                    <View><Button
                        onPress={()=>navigation.navigate("password")}
                        buttonStyle={
                            LoginStyle.buttonstyle2
                        }
                        titleStyle={LoginStyle.buttonstyle23}
                        title={"forgot Password?"} /></View>
                    <View><Button
                        onPress={() => navigation.navigate("signup")}
                        buttonStyle={
                            LoginStyle.buttonstyle2
                        }
                        titleStyle={LoginStyle.buttonstyle23}
                        title={"Register"} />
                    </View>



                </View>
                <Text style={{
                    color: "darkblue"
                }}>@Parrat 2023</Text>
            </ScrollView>
        </View>

    )
}



const LoginStyle = StyleSheet.create({
    totalConatiner: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#FBFCF8"

    },
    imageStyle: {
        height: height * 0.2,
        width: width * 0.2,
        alignSelf: "center",
    },
    buttStyle: {
        padding: 10,
        margin: 3,
        width: width * 0.5,
        borderRadius: 10,
        alignSelf: "center"
    },
    buttonstyle2: {
        backgroundColor: null,

    },
    buttonstyle23: {
        color: "darkblue",

    }


})