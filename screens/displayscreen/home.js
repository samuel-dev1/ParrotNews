
import React from "react";
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { View, FlatList, TouchableWithoutFeedback, Text, ActivityIndicator, Image, ImageBackground, StyleSheet, Dimensions, Alert} from "react-native"

import { useNavigation } from "@react-navigation/native";

const {width, height} = Dimensions.get("window")

export default function Home() {
    const navigation  = useNavigation();
    const [data, setdata] = React.useState(null)
    const [loading, setloading] = React.useState(true)
    const [data2, setdata2] = React.useState(null)
    let disabled = false
    const fetchdata = () => {
        axios
            .get(
                "https://softnixx.com/api"
            )
            .then((response) => {
                setdata(response.data);
                setloading(false)
            })
    }

const Getdata= ()=>{
    axios.get(
        "https://softnixx.com/api"
    ).then((response)=>{
        setdata2(response.data);
    })
}


React.useEffect(()=>{
   Getdata();
},[])


    React.useEffect(() => {
        fetchdata();
    }, [])


    return (

        <View style={{flex:1}}>


            {loading ? (
                  <View style={Homestyle.activityContainer}>
                    <Text style={Homestyle.activityText}>
                        PARROT....
                    </Text>
                  <ActivityIndicator />
              </View>
            ):(
                <FlatList

                ListHeaderComponent={

                    data2 === null?<Text style={Homestyle.advert}>Look like network issues</Text>:<FlatList 
                    data={data2}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true} 
                    contentContainerStyle={Homestyle.flatListContentContainer}
                    
                    renderItem ={({item})=>(
                        <View style={{flex:1}}>

                        {item.image?
                        <ImageBackground
                        style={Homestyle.cover}
                        source={{uri:item.image}}
                        >
                            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("details",{url:item.read,image:item.image,title:item.title, date:item.date, category:item.category})}}>
                            <View style={Homestyle.container1}><Text style={Homestyle.category}>{item.category}</Text>
                            <Text style={Homestyle.title} >{item.title}</Text></View>
                            </TouchableWithoutFeedback>


                        </ImageBackground>
                    :null}
</View>


                    )}
                    
                    />
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
                     <TouchableWithoutFeedback onPress={()=>{navigation.navigate("details",{url:item.read,image:item.image,title:item.title, date:item.date, category:item.category})}}>
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
    )}
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



