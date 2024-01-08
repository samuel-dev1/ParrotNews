import React from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions, Image, ActivityIndicator, StyleSheet, TouchableWithoutFeedback} from "react-native";

import axios from "axios";
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';


const {width, height} = Dimensions.get("window")
export default function News(){
    const navigation = useNavigation()
    const [data, setdata] =  React.useState(null)
    const[loading, setloading] = React.useState(true)
    const fetchdata = () => {
        axios
            .get(
                "https://softnixx.com/news"
            )
            .then((response) => {
                setdata(response.data);
                setloading(false)

            })

    }
    useFocusEffect(()=>{
        fetchdata()
    })
        return (
            <View style={{flex:1}}>
                {loading ?
                (
                    <View style={Homestyle.activityContainer}>
                        <Text style={Homestyle.activityText}>
                            PARROT....
                        </Text>
                        <ActivityIndicator />
                    </View>
                )
                :
                <FlatList
                ListHeaderComponent={
                    <View style={{padding:10, backgroundColor:"white"}}>
                        <Text style={{
                            textAlign:"center",
                            color:"lightgray",
                        }}>Trending News</Text>
                    </View>
                }
                ItemSeparatorComponent={<View style={{
                    backgroundColor: "lghtgray",
                    padding: 1,
                }}>
                </View>}
                indicatorStyle="black"
                maxToRenderPerBatch={4}
                    initialNumToRender={4}
                    ListEmptyComponent={
                        <View style={Homestyle.container1}>
                            <Text style={Homestyle.activityText}>
                                please check your network and try again
                            </Text>
                        </View>
                    }
                
                data={data}
                renderItem={({ item }) => (
                    <View>
                   <TouchableWithoutFeedback  onPress={()=>{navigation.navigate("details",{url:item.read,image:item.image,title:item.title, date:item.date, category:item.category})}}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            width: width * 0.98,
                            backgroundColor: "white",
                            justifyContent: 'space-evenly',
                            alignItems: "center",
                            alignContent: 'space-evenly',
                        }}>
                            <View style={{
                                width: "70%",
                                paddingLeft: 5,
                                paddingRight: 5,
                            }}>
    
                                <Text style={{
                                    color: "#000",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                }}>{item.title}</Text>
    
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignContent: "flex-start",
                                    alignItems: "center",
                                }}><Text style={{
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                }}><Icons name='clock' size={15} color={"#5143"} />{ }</Text>
                                    <Text style={{
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                    }}><Icons name='timeline-text' ize={15} color={"#8143"} />{item.category}</Text><Text style={{
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                    }}><Icons name='timeline-text' ize={15} color={"#8143"} />{item.site}</Text></View>
    
                            </View>
                            {item.image?
                            <View
                                style={{
                                    width: "30%",
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                }}
                            ><Image
                                    resizeMethod='auto'
                                    resizeMode='cover'
                                    source={{ uri: item.image }} style={{
                                        height: 100,
                                        borderRadius: 10,
                                    }} /></View>
                                    :null}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )}
            keyExtractor={(item, index) => index}
                />
                                }
            </View>
        )
    }
    const Homestyle = StyleSheet.create({
        flatListContainer: {
          marginVertical: 10,
        },
        flatListContentContainer: {
          paddingHorizontal: 10,
        },
        cover: {
          width: width * 0.8,
          height: height * 0.2,
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
          alignContent: 'center',
          justifyContent: 'center',
          opacity: 1,
          resizeMode: 'cover',
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 10,
          overflow: 'hidden',
        },
        container1: {
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        },
        category: {
          fontSize: 16,
          color: 'white',
          fontWeight: 'bold',
        
        },
        title: {
          fontSize: 18,
          color: 'white',
          fontWeight: 'bold',
        },
        advert: {
          textAlign: 'center',
          marginTop: 20,
          fontSize: 18,
          color: 'black',
        },
        activityContainer:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        },
        activityText:{
            color:"lightgray",
            fontSize:20,
    
        }
      });