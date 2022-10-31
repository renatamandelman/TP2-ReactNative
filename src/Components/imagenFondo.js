import React, { useState, useEffect }  from 'react';
import { Text,View, StyleSheet, Button,Image,ImageBackground } from 'react-native';
// import { Video, AVPlaybackStatus } from 'expo-av';
// import logo from './assets/logo.png'; 
import * as ImagePicker from 'expo-image-picker';



export default function phoneNumber(){
    // const video = React.useRef(null);
    // const video1 = React.useRef(null);
    // const [status, setStatus] = React.useState({});
    // const [status1, setStatus1] = React.useState({});
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    return (
      
    <View style={styles.container}>
        {/* <Image source={logo}style={styles.logo} /> */}
        <Text style={styles.titleText}> Public Video  </Text>
        <Button title="Pick Image" onPress={pickImage}/>
        <ImageBackground 
        
    style={styles.img}
    source={{uri: image}}/>
    

       </View>
    );
  }
  

  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      alignItems:'center'
    },

    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 25,
  
    },
    img: {
      height: screenHeight,
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
    },
    // logo:{ 
    //   width: 200,
    //   height: 54,
     
    //  },
     Perfil:{

     }
    
  });