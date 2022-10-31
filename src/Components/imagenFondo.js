import React, { useState, useEffect }  from 'react';
import { TextInput,View, StyleSheet, Button,Image,ImageBackground,Dimensions } from 'react-native';
// import { Video, AVPlaybackStatus } from 'expo-av';
// import logo from './assets/logo.png'; 
import * as ImagePicker from 'expo-image-picker';

const screenHeight = Dimensions.get('window').height;
 const screenWidth = Dimensions.get('window').width;
const imagenFondo = () => {


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
    <View>
    <Button title="Pick Image" onPress={pickImage()}/>   
      <ImageBackground source={{uri:{image} }}
        resizeMode="stretch"
        style={styles.img}> 
    
      </ImageBackground>
    </View>
  );
};
  
export default imagenFondo;
  
const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});
// export default function imagenFondo(){
//     // const video = React.useRef(null);
//     // const video1 = React.useRef(null);
//     // const [status, setStatus] = React.useState({});
//     // const [status1, setStatus1] = React.useState({});
//     const [image, setImage] = useState(null);

//     const pickImage = async () => {
//       // No permissions request is necessary for launching the image library
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
  
//       console.log(result);
  
//       if (!result.cancelled) {
//         setImage(result.uri);
//       }
//     };

//     return (
      
//     <View style={styles.container}>
//         <Button title="Pick Image" onPress={pickImage}/>
//         <ImageBackground style={styles.img} source={{uri: image}}         resizeMode="stretch"
// />
    

//        </View>
//     );
//   }
  

  
//   const styles = StyleSheet.create({
//     container: {
//      flex: 1,
//       justifyContent: 'center',
//       backgroundColor: '#ecf0f1',
//       alignItems:'center'
//     },

//     buttons: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     titleText: {
      
//       fontSize: 20,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginVertical: 25,
  
//     },
//     img: {
//       height: screenHeight,
//       width: screenWidth,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
   
    
//   });