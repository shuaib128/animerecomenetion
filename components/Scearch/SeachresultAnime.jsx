import React from 'react'
import {
    StyleSheet, View, Text, Image, TouchableOpacity 
} from 'react-native'

export default function SeachresultAnime(props) {
    return (
        <TouchableOpacity style={styles.fullSearchResulsAnime}
            activeOpacity={0.9}
        >
            <Image 
                source={{uri: props.image}} style={styles.recentAnimeImg}
            />

            <View style={styles.searchanimeDetail}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.push("DetailAnime", {
                            animeID: props.anime_id
                        })
                    }}
                >
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>{props.title}</Text>
                </TouchableOpacity>
                <Text style={{color: "black"}}>{props.synopsis}...</Text>
                <View style={styles.rattingBox}>
                    <Text style={{color: "white", textAlign: "center", marginTop: 5}}>
                        {props.score}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    fullSearchResulsAnime: {
        flexDirection: "row",
        width: "100%",
        height: 150,
        marginBottom: 25,
        borderRadius: 10
    },

    recentAnimeImg:{
        width: "40%",
        height: "100%",
        borderRadius: 15
    },

    searchanimeDetail: {
        width: "60%",
        backgroundColor: "white",
        padding: 10,
        borderBottomEndRadius: 15
    },

    rattingBox: {
        backgroundColor: "black",
        width: 40,
        height: 30,
        marginTop: 5
    }
});