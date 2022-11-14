import React, { useState, useEffect }  from 'react';
import {ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,Dimensions,ImageBackground, TouchableOpacity } from 'react-native';
// import { Video, AVPlaybackStatus } from 'expo-av';
// import logo from './assets/logo.png'; 
import * as ImagePicker from 'expo-image-picker';

const screenHeight = Dimensions.get('window').height;
 const screenWidth = Dimensions.get('window').width;
 export default function ImagenFondo(){


    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const { width } = useWindowDimensions();
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
  
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        allowsMultipleSelection: true,
        selectionLimit: 10,
        aspect: [4, 3],
        quality: 1,
      });
 
      if (!result.cancelled) {
        console.log(result.selected[0].uri);
        setImage(result.selected[0].uri );
      }
    };
  return (
//     <FlatList
//       data={images}
//       renderItem={({ item }) => (
//         <Image
//           source={{ uri: item.uri }}
//           style={{ width: width / 2, height: 250 }}
//         />
//       )}
//       numColumns={2}
//       keyExtractor={(item) => item.uri}
//       contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
//       ListHeaderComponent={
//         isLoading ? (
//           <View>
//             <Text
//               style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
//             >
//               Loading...
//             </Text>
//             <ActivityIndicator size={"large"} />
//           </View>
//         ) : (
//           <Button title="Pick images" onPress={pickImages} />
//         )
//       }
//     />
//   );
// };
<View>
 
      <ImageBackground source={{uri:image }}
        resizeMode="cover"
        style={styles.img}> 
        <TouchableOpacity  style={styles.button}  title="Pick Image" onPress={pickImage}>
        <Text>Select background image</Text>
        </TouchableOpacity>   
      </ImageBackground>
    </View>
  )}
  
  
const styles = StyleSheet.create({
  img: {
     height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    top:200,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7CDB8A',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
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