import React from "react";
import Icons from '@expo/vector-icons/MaterialCommunityIcons';

import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Linking } from "react-native";
import { Button, ListItem, Switch } from "react-native-elements";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window")
import { auth  } from "../mainfb/firebase";
import { showMessage } from "react-native-flash-message";
import { Avatar } from "react-native-paper";

export default function Me({ route }) {
    const navigation = useNavigation()
    const [user, setUser] = React.useState(null)


    const myUser = () => {
        if (auth.currentUser) {
            setUser(auth.currentUser?.email)
        }
        else {
            null
        }
    }


    useFocusEffect(
        React.useCallback(() => {
            myUser();
        }, [user])
    );





    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View >

                <View style={{
                    padding: 2,
                    paddingVertical: 25,
                    marginTop: 15,
                    height: "auto",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: width * 0.98,
                }}>

                    <View style={{
                        width: width * 0.1,
                    }}><Icons name='account-outline' size={35} color="#480" /></View>
                    <View style={{
                        width: width * 0.7,
                        paddingHorizontal: 5,
                    }}><Text style={{ color: "#111", fontWeight: "bold", fontSize: 20 }}>Hello</Text>
                        <Text style={{
                            fontSize: 15
                        }}> {user != null ? user : 'sign in to sync data and get more info'}</Text></View>
                    <View style={{
                        width: width * 0.4,
                    }} >



                        {user ? <Avatar.Text label={auth.currentUser?.uid} /> :
                            <Button

                                onPress={() => navigation.navigate("login")}

                                iconContainerStyle={{
                                    backgroundColor: 'gray',
                                    borderRadius: 20,
                                    marginRight: 10,
                                }}
                                style={{
                                    marginRight: 20,
                                    paddingRight: 10,
                                }}
                                buttonStyle={{
                                    backgroundColor: "red",
                                    width: 70,
                                    borderRadius: 10,
                                }}
                                title={"sign in"}  />
                        }
                    </View>




                </View>
            </View>

            <View style={{
                justifyContent: "flex-start",
                alignContent: "flex-start",
                alignSelf: "flex-start",
                alignItems: "flex-start",
                backgroundColor: "white",
                width: width * 0.98,
                marginVertical: 10,
            }}>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: width * 0.98,
                }}><Button
                        buttonStyle={{
                            backgroundColor: null
                        }}
                        titleStyle={{
                            color: "#111",
                            marginLeft: 30,
                        }}
                        icon={() => <Icons name='star' color={"#8739"} size={25} />} title={"bookmarks"} />
                    <Text style={{
                        color: "red",
                        fontSize: 10,
                    }}>coming soon!</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: width * 0.98,
                }}><Button
                        buttonStyle={{
                            backgroundColor: null
                        }}
                        titleStyle={{
                            color: "#111",
                            marginLeft: 30,
                        }}
                        icon={() => <Icons name='clock' color={"#539"} size={25} />} title={"History"} />
                    <Text style={{
                        color: "red",
                        fontSize: 10,
                    }}>coming soon!</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: width * 0.98,
                }}>
                    <Button
                        iconContainerStyle={{
                            backgroundColor: "red",

                        }}


                        buttonStyle={{
                            backgroundColor: null
                        }}
                        titleStyle={{
                            color: "#111",
                            marginLeft: 30,
                        }}
                        icon={() => <Icons name='moon-first-quarter' style={{
                            backgroundColor: "gray",
                            borderRadius: 20,
                        }} color={"#344"} size={25} />} title={"Darkmood"} />
                    <Switch />
                </View>

            </View>


            <View

                style={{
                    justifyContent: "flex-start",
                    alignContent: "flex-start",
                    alignSelf: "flex-start",
                    alignItems: "flex-start",
                    backgroundColor: "white",
                    width: width * 0.98,
                    marginVertical: 10,
                }}

            >
                <TouchableOpacity 
                onPress={()=>Linking.openURL('https://wa.me/8130423221')}
                >
                <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: width * 0.98,
            }}>
                <Button
                        buttonStyle={{
                            backgroundColor: null
                        }}
                        titleStyle={{
                            color: "#111",
                            marginLeft: 30,
                        }}
                        icon={() => <Icons name='help-network' color={"red"} size={25} />} title={"help"} />


                    <ListItem.Chevron size={25} color={"#111"} />
                </View>
            </TouchableOpacity>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: width * 0.98,
                }}><Button
                        buttonStyle={{
                            backgroundColor: null
                        }}
                        titleStyle={{
                            color: "#111",
                            marginLeft: 30,
                        }}
                        icon={() => <Icons name='twitter' color={"#1019"} size={25} />} title={"follow us"} />
                    <ListItem.Chevron size={25} color={"#111"} />
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: width * 0.98,
                }}><Button
                        buttonStyle={{
                            backgroundColor: null
                        }}
                        titleStyle={{
                            color: "#111",
                            marginLeft: 30,
                        }}
                        icon={() => <Icons name='facebook' color={"blue"} size={25} />} title={"Share on Facebook"} />
                    <ListItem.Chevron size={25} color={"#111"} />
                </View></View>
            <Text style={{ justifyContent: "center", textAlign: "center", fontSize: 14 }}>@parrot 2023</Text>
            {auth.currentUser ? <Button
            onPress={()=>{auth.signOut,auth.updateCurrentUser, navigation.navigate("login")}}
                title={"log out and login another user"}
                buttonStyle={{
                    backgroundColor: "darkblue",
                    width: width * 0.6,
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 20,
                }}
                titleStyle={{

                    color: "white",
                    borderRadius: 30,

                }}
                icon={() => <Icons name='logout' style={{

                }} color={"white"} size={25} />} /> : null

            }

        </SafeAreaView>
    )
}