import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,

} from "react-native";
import * as Contacts from "expo-contacts";
import Entypo from 'react-native-vector-icons/Entypo';



export default function Contactos() {
  const [contacts, setContacts] = useState([]);


  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        setContacts(data);
      }
    }
  };

  const getPhoneNumbers = (contact) => {
    console.log(contact);
    if (contact.phoneNumbers) {
        return(
            contact.phoneNumbers.map((number,index) => {
                return(
                    <>
                    <Text style={styles.number} key={index}>{number.number}</Text>
                    </>
                )
            })
        )
    }
    };

  useEffect(() => {
    getContacts();
  }, []);

  // const renderItem = ({ item }) => (
  //   <Item title={item.title} />
  // );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <FlatList
  //       data={contacts}
  //       renderItem={{item}}
  //       keyExtractor={(item) => item.id}
  //     />
  //   </SafeAreaView>
  // );
  console.log(contacts)

  return (
    

    <View style={styles.container}>
      <FlatList
        data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({ item }) => (
            
          <TouchableOpacity key={item.id}>
            <View style={styles.item}>
              <Text style={styles.texto}> {item.name}  <Entypo name='phone' size={25} style={styles.phone}  /></Text>
              {getPhoneNumbers(item)} 
            </View>
          </TouchableOpacity>          
        )}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
      justifyContent: "center",
    borderRadius: 10,
  }, 
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }, 
 
  texto: {
    marginTop:5,
    fontSize: 20,
    textAlign:'left',
    flex:1,
  },
  number:{
  marginTop:10,
  },
  phone:{

  left:300,

 
  }
  // contacto: {
  //   height: "auto",
  //   margin: 20,

  //   borderColor: 'purple',
  //   borderWidth:5,
  //   width: 350, 
  //   height: 100, 
  //   borderRadius: 20,
  // },

 
   
});