import React, {useState, useRef, useEffect} from 'react'
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity,
    PermissionsAndroid 
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function SearchBar(props) {
    const searchTextInput = useRef();
    const [transcript, setResult] = useState('');

    const handelVoiceSearch = () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
            title: "Shuaib Anime Needs Your Microphone",
            message:
                'Shuaib Anime Needs Your Microphone ' +
                'so you can enable voice search.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        })
    }

    //Auto fouces on text input upon entering
    useEffect(() => {
        searchTextInput.current.focus();
    }, [])


    return (
        <View style={styles.SearchView}>
            <View style={{flexDirection: 'row', width: "100%", alignSelf: "center"}}>
                <Ionicons style={styles.searchIcon} name="search" size={25} color="white"/>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder="Search"
                    placeholderTextColor="white" 
                    onPressIn={() => {
                        props.navigation && props.navigation.navigate('Search')
                    }}
                    onChangeText={(text) => {
                        props.setSearchQuery && props.setSearchQuery(text)
                    }}
                    ref={searchTextInput}
                />
                {props.screenPage === 'searchScreen' ?
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={handelVoiceSearch}
                    >
                        <Ionicons style={styles.searchIconMic} name="mic" size={25} color="white"/>
                    </TouchableOpacity>
                    :
                    <Text></Text>
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    SearchView:{
        position: "absolute",
        zIndex: 1,
        width: "90%",
        backgroundColor: "#121b1d",
        height: 50,
        top: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf: "center",
    },

    searchIcon: {
        alignSelf: "center",
        marginHorizontal: 11
    },

    searchIconMic: {
        alignSelf: "center",
        marginHorizontal: 20,
    },

    searchInput: {
        width: "70%",
        height: "100%",
        color: "white",
        alignSelf: "center",
        fontSize: 17
    }
  });