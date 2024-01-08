import React, { useState } from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import { auth } from '../mainfb/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Button } from 'react-native-elements';

const {width, height} = Dimensions.get("window")

export default function Forgot () {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        auth;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Password reset email sent successfully');
            })
            .catch((error) => {
                console.error('Error sending password reset email', error);
            });
    };
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <TextInput
            
                style={{
                    textAlign: "left",
                    justifyContent: 'flex-end',
                    padding: 20,
                    marginBottom: 10,
                    width: width * 0.8,
                    backgroundColor: "#FFFF",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    borderColor: "gray",
                }}
            
                placeholder="Enter your email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            

            <Button 
             disabled={email? false : true}

        style={
            {
                padding: 10,
                margin: 3,
               
                width: width * 0.5,
                borderRadius: 10,
                alignSelf: "center"
            }
        }
            title="Reset Password" onPress={handleResetPassword} />
        </View>
    );
};