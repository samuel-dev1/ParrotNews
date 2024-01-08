import React, { useState } from "react";
import { Button } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { auth } from "../mainfb/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import { View, Text, Dimensions, Image, StyleSheet, ScrollView, Alert,TextInput } from "react-native";

const { width, height } = Dimensions.get("window")

export default function SignUpPage({ route, navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [retype, setretype] = useState('')

   const handlesignup = () => {
        if (password === retype) {
            setLoading(true)
            auth;
            createUserWithEmailAndPassword(auth, email, password).then(()=>{
                showMessage({
                    message:"registration successful",
                    type:"success",
                })
            }).catch(()=>showMessage({
                message:"registrations Failed",
                type:'danger',
            })).finally(()=>setLoading(false))
        }
        else {
            Alert.alert("password does not match!")
        }
    }
    return (
        <View style={Register.mainContainer}>
            <ScrollView>
            
                <View style={{
                    alignSelf: "center"
                }}>
                    <Icons style={{
                        alignSelf: "center"
                    }} name='account' size={height * 0.2} color={"darkblue"} />
                     <Text style={{
                        color:"#111",
                        fontSize:18,
                        paddingBottom:2,

                    }}>Email Address</Text>
                    <TextInput
                        value={email}
                        onChangeText={val => setEmail(val)}
                        placeholder={"Enter Email Address"}
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
                     <Text style={{
                        color:"#111",
                        fontSize:18,
                        paddingBottom:2,

                    }}>password</Text>

                    <TextInput
                    placeholder={"Enter password"}
                        value={password}
                        onChangeText={val => setPassword(val)}
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

                        secureTextEntry={true}
                       
                        clearButtonMode='while-editing'
                       
                    />
                     <Text style={{
                        color:"#111",
                        fontSize:18,
                        paddingBottom:2,

                    }}>Re-enter Password</Text>
                    <TextInput
                    placeholder={"Re-enter your password"}
                        value={retype}
                        onChangeText={val => setretype(val)}
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
                        secureTextEntry={true}
                        
                       

                        clearButtonMode='while-editing'
                        
                    />
                </View>
                <Button
                    onPress={handlesignup}
                    disabled={retype ? false : true}
                    loading={loading}
                    style={Register.buttStyle}
                    buttonStyle={Register.buttStyle}
                    iconRight={true}
                    icon={() => <Icons name='logout' size={20} color="white" />} title={"Register"} />
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
                        onPress={() => navigation.navigate("login")}
                        buttonStyle={
                            Register.buttonstyle2
                        }
                        titleStyle={Register.buttonstyle23}
                        title={"Try login"} /></View>
                    <View><Button
                        onPress={()=>navigation.navigate("password")}
                        buttonStyle={
                            Register.buttonstyle2
                        }
                        titleStyle={Register.buttonstyle23}
                        title={"Forgot Password"} />
                    </View>

                </View>

            </ScrollView>

        </View>

    )

}


const Register = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBFCF8",
        alignSelf: "center",

    },
    imageStyle: {
        height: height * 0.2,
        width: width * 0.2,
        alignSelf: "center",
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
