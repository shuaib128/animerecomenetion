import React from 'react'
import { 
    StyleSheet, View, Text, Image, TouchableOpacity 
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function AnimeListsAnime(props) {
    
    return (
        <View style={styles.recentAnimeView}>
            <TouchableOpacity
                activeOpacity={.7}
                onPress={() => {
                    props.navigation.push("DetailAnime", {
                        animeID: props.anime_id
                    })
                }}
            >
                <Image style={styles.recentAnimeImg} source={{ uri: props.image }}/>
            </TouchableOpacity>
            <Text style={styles.recentAnimeName}>{props.title}..</Text>
            <Text style={styles.recentAnimerateing}>
                {props.score == 0 ? "" : props.score }
                <Ionicons
                    style={{marginLeft: 10}} 
                    name="star" 
                    size={15} 
                    color="black"
                />
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    recentAnimeView:{
        width: 150,
        marginRight: 17,
    },

    recentAnimeImg:{
        width: "100%",
        height: 190,
        borderRadius: 10
    },

    recentAnimeName: {
        fontSize: 15,
        marginTop: 7
    },

    recentAnimerateing: {
        fontSize: 15,
        marginTop: 7,
        color: "#BA2525",
        fontWeight: "bold",
        width: "100%"
    }
});