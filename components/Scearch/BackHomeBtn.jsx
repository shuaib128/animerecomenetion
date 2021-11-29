import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function BackHomeBtn(props) {
    return (
        <TouchableOpacity style={styles.backview}
            activeOpacity={.9}
            onPressIn={() => {
                props.navigation && props.navigation.navigate('All Anime')
            }}
        >
            <Ionicons 
                style={styles.searchIconMic} 
                name="arrow-back" 
                size={27} 
                color="black"
            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    backview:{
        position: "absolute",
        zIndex: 1,
        top: 20,
        flexDirection: 'row',
        left: 17
    },

    searchIcon: {
        color: "white",
        backgroundColor: "black",
        padding: 10,
        fontSize: 15,
        borderRadius: 5
    },
});