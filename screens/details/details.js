
import React, { PureComponent } from "react";

import { View, Text, ScrollView, ActivityIndicator, Image, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Linking, Alert, FlatList } from "react-native";
import axios from "axios";
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window")

export default function Details({ route, navigation }) {
    const [data, setData] = React.useState(null)
    const [loading, setloading] = React.useState(true)
    const [loading2, setLoading2] = React.useState(true)
    const [data2, setData2] = React.useState(null)

    const { url } = route.params
    const { image } = route.params
    const { title } = route.params
    const { date } = route.params
    const { category } = route.params

    const fetch = () => {
        const urls = `https://softnixx.com/?url=${url}`
        try {
            axios.get(urls).then(response => {
                setData(response.data)
            }).then(() => setloading(false))
        }
        catch {
            Alert.alert("please scheck network and try again!")
        }
    }
    React.useEffect(() => {
        fetch()
    }, [])
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: title
        })
    })

    const fetch2 = () => {
        const url = `https://softnixx.com/category?url=${category}`
        try {
            axios
                .get(url)
                .then(response => setData2(response.data))
                .then(() => setLoading2(false))

        }
        catch {
            null
        }
    }
    React.useState(() => { fetch2() }, [])
    return (
        <View style={{ flex: 1 }}>
            {loading ? <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator />
                <Text style={{ color: "lightgray", textAlign: "center", fontSize: 30 }}>

                    PARROT...
                </Text>
            </View> :
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        <Text style={{
                            color: "darkblue",
                            textAlign: "justify",
                            justifyContent: "center",
                            padding: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            fontSize: 23,
                            backgroundColor: "white",
                            fontWeight: "bold",
                        }}>{title}</Text>
                        {image ==null?null
                            :
                        <View>
                        <Image resizeMode='cover'  resizeMethod='auto'  style={{
                            width: width,
                            height: height * 0.45,
                            bottom: "auto",
                        }} source={{ uri: image }} />
                        </View>}
                        <Text style={{
                            color: "darkblue",
                            fontSize: 18,
                            padding: 5,
                        }}></Text>
                        <Text style={{
                            color: "darkblue",
                            fontSize: 18,
                            padding: 5,
                        }} ><Icons name='gesture-tap' color={'#111'} size={30} />{category}</Text>


                        <TouchableOpacity

                            onPress={() => Linking.openURL(url)}
                            style={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "right",
                                alignItems: "center",
                                fontSize: 18,
                                padding: 3,
                            }}
                        ><Icons name='web' size={30} color="#111" /><Text style={{
                            color: "gray",
                            fontSize: 20,

                        }}>Read Origninal</Text></TouchableOpacity>
                        <Text style={{
                            color: '#111',
                            margin: 5,
                            fontSize:16,
                    padding: 5,
                            textAlign: 'justify',
                        }}
                        >{data.title}</Text>

<View style={{
    padding: 10,
    margin: 10,
}}>
    <Text style={{
        color:"#111",
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold",
    }}>
You might also like?
    </Text>
    {loading2?<ActivityIndicator />:
    <FlatList
        horizontal={true}
        data={data2}
        ListEmptyComponent={
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Problem loading related Category</Text>
            </View>
        }
        renderItem={({ item }) => (
            <View style={{
                marginRight: 10, // Add some margin between related posts
            }}>

            
                {item.image === null ? null : (

                  
                    <View style={{
                        alignItems: 'center',
                        borderWidth: 1, // Add a border around the related post
                        borderColor: 'lightgray',
                        borderRadius: 8, // Rounded corners for the related post container
                        overflow: 'hidden', // Ensure the image doesn't overflow
                    }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("details",{url:item.read,image:item.image,title:item.title, date:item.date, category:item.category}),
                fetch()
                }}>
                        <Image
                            resizeMode='cover' 
                            source={{ uri: item.image}}
                            style={{
                                height: height * 0.32,
                                width:200
                            }}
                        />
                        <Text style={{
                            padding: 10,
                            textAlign: 'center',
                            width:200
                        }}>{item.title}</Text>
                    </TouchableOpacity>
                    </View>
                )}
            </View>
        )}
    />
}
</View>


                        <View style={{

                            padding: 10,
                            margin: 10,
                           
                            borderRadius: 10,
                        }}><Text style={{
                            color: "#111",
                            
                            textAlign: "center"
                        }}>Text image and content from the reference site as seen above.™p.rules(18)</Text></View>
                        <Text style={{ textAlign: "center", padding: 10, margin: 15 }}>@Parrot 2023</Text>
                    </View>

                    
                </ScrollView>
            }
            

        </View>
    )
}



