import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function HomeScreenSearchBUutton(props) {
    return (
        <TouchableOpacity 
            style={styles.SearchView}
            activeOpacity={.9}
            onPressIn={() => {
                props.navigation && props.navigation.navigate('Search')
            }}
        >
            <View>
                <Ionicons style={styles.searchIcon} name="search" size={25} color="white"/>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    SearchView:{
        position: "absolute",
        zIndex: 1,
        width: 50,
        backgroundColor: "#121b1d",
        height: 50,
        top: 20,
        borderRadius: 100,
        flexDirection: 'row',
        alignSelf: "flex-end",
        right: 15
    },

    searchIcon: {
        marginHorizontal: 13,
        marginVertical: 12
    },
});