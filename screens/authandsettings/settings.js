
import React from "react";
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";

import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Linking, Alert } from "react-native";
import { Button, ListItem, Switch } from "react-native-elements";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { showMessage } from "react-native-flash-message";
import { auth } from "../mainfb/firebase";

const { width, height } = Dimensions.get("window")

export default function Settings() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{
                marginTop: 30,
                fontSize: 20,
                textAlign: "center",

            }}>Settings</Text>
            <View style={{
                padding: 2,
                paddingVertical: 25,
                marginTop: 15,
                height: "auto",
                backgroundColor: "white",
                display: "flex",

                width: width * 0.98,
            }}>



                <TouchableOpacity
                    onPress={() => Linking.openURL("https://wa.link/mzmr41")}

                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: 5,
                        padding: 5,
                    }}>
                    <Text>Be a Sponsorer</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => showMessage({ message: "NO 'HOMEPAGE' found", type: "info" })}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: 5,
                        padding: 5,
                    }}>
                    <Text>Homepage</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>Alert.alert("download not available")}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 5,
                    padding: 5,

                }}>
                    <Text>Downloads</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </TouchableOpacity>

            </View>

            <View

                style={{
                    padding: 2,
                    paddingVertical: 10,
                    marginTop: 1,
                    height: "auto",
                    backgroundColor: "white",
                    display: "flex",

                }}
            ><TouchableOpacity
            onPress={()=>auth.signOut()}
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 5,
                padding: 5,

            }}>


                    <Text >clear data</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </TouchableOpacity></View>



            <View
                style={{
                    padding: 2,
                    paddingVertical: 25,
                    marginTop: 1,
                    height: "auto",
                    backgroundColor: "white",
                    display: "flex",

                    width: width * 0.98,
                }}

            ><TouchableOpacity style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 5,
                padding: 5,

            }}>
                    <Text>Feedback</Text>
                    <ListItem.Chevron size={25} color={"#111"} />

                </TouchableOpacity><TouchableOpacity style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 5,
                    padding: 5,

                }}>
                    <Text>Rate Us</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </TouchableOpacity></View>
            <View
                style={{
                    padding: 2,
                    paddingVertical: 25,
                    marginTop: 1,
                    height: "auto",
                    backgroundColor: "white",
                    display: "flex",

                    width: width * 0.98,
                }}
            ><TouchableOpacity style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 5,
                padding: 5,

            }}>
                    <Text>About Us</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 5,
                    padding: 5,

                }}>
                    <Text>Reset to default</Text>
                    <ListItem.Chevron size={25} color={"#111"} />
                </TouchableOpacity></View>
        </SafeAreaView>

    )
}