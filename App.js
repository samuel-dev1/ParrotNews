
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from './screens/displayscreen/home';
import Settings from './screens/authandsettings/settings';
import Me from './screens/authandsettings/me';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Agric from './screens/displayscreen/Agriculture';
import Business from './screens/displayscreen/Business';
import Edu from './screens/displayscreen/Education';
import International from './screens/displayscreen/International';
import Job from './screens/displayscreen/jobs';
import News from './screens/displayscreen/News';
import Politics from './screens/displayscreen/Politics';
import Sport from './screens/displayscreen/sports';
import Details from './screens/details/details';
import LoginPage from './screens/authandsettings/login';
import SignUpPage from './screens/authandsettings/register';
import Forgot from './screens/authandsettings/forgetpass';
const Bottom = createMaterialBottomTabNavigator()
const Tab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()
import { auth } from './screens/mainfb/firebase';

export default function App() {
  function TopNavBar({ route }) {
    
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarLabelStyle: {
            color: "darkgray",
            fontSize: 15,
            fontStyle: "italic",
            fontWeight: "bold",
          },
        }}
        tabBarPosition="top"
        initialRouteName='All News'

      >
        <Tab.Screen component={Home} name="All News" />
        <Tab.Screen component={News} name="Trending" />
        <Tab.Screen component={Politics} name="Politics" />
        <Tab.Screen component={Edu} name="Education" />
        <Tab.Screen component={Business} name="Business" />
        <Tab.Screen component={Agric} name="agriculture" />
        <Tab.Screen component={International} name="Internationals" />
        <Tab.Screen component={Sport} name="sports" />
        <Tab.Screen component={Job} name="Jobs" />
      </Tab.Navigator>
    )
  }


  function BottomNavBar({ route }) {
    return (
      <Bottom.Navigator
        initialRouteName='Home'
        style={{
          paddingBottom: 2,
        }}
        barStyle={{
          backgroundColor: "white"
        }}
      >
        <Bottom.Screen
          options={{
            headerShown: false,
            tabBarColor: "blue",
            tabBarIcon: (tabInfo) => (
              <Icons name='home' size={25} color={tabInfo.focused ? "#333" : "lightgray"} />
            )
          }}
          component={TopNavBar} name="home" />
        <Bottom.Screen
          options={{
            headerShown: false,
            tabBarColor: "darkgray",
            tabBarIcon: (tabInfo) => (
              <Icons name='cog' size={25} color={tabInfo.focused ? "#333" : "lightgray"} />
            )
          }}
          component={Settings} name="settings" />
        <Bottom.Screen
          options={{
            headerShown: false,
            tabBarColor: "darkgray",
            tabBarIcon: (tabInfo) => (
              <Icons name='account-cog' size={25} color={tabInfo.focused ? "#333" : "lightgray"} />
            )
          }}
          component={Me} name="Me" />
      </Bottom.Navigator>
    );
  }
  
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='ParrotNews'>
<Stack.Screen component={BottomNavBar} name="ParrotNews" 
options={{
  headershown:false,
  headerTitleStyle:{
    color:"lightgray",
    fontSize:23,
    fontWeight:"bold"
  }
}}
/>
<Stack.Screen component={Me} name="Me" />
<Stack.Screen component={Settings} name="settings" />
<Stack.Screen component={Details} name="details" />
<Stack.Screen component={LoginPage} name="login"/>
<Stack.Screen component={SignUpPage} name="signup"/>
<Stack.Screen component={Forgot} name="password"/>
    </Stack.Navigator>

   </NavigationContainer>
  );
}


