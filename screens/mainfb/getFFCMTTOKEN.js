import { async } from "@firebase/util";
import messaging from "@react-native-firebase/messaging";

let token = String;
const requestUserPermission = async ()=>{
    const authStatus = await messaging().requestPermission();
    const emabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
}

if (enable){
    token =(await messaging().getToken()).toString();
}
else{
    console.log('REQUEST PERMISSION DENIED');
}
const getNewFCMToken = async ()=>{
    try{
        await requestUserPermission();
        console.log('Token:', token);
    }
    catch(error){
        console.log(null)
    }
}


export default getNewFCMToken;