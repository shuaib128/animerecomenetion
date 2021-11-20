import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NUMANIME from './PromoanimeNum';
import axios from 'axios';

export default function PromoAnime(props) {
    const [promoAnime, setPromoAnime] = useState(() => {
        return axios.get(`https://api.jikan.moe/v3/anime/${NUMANIME}`)
        .then(res => setPromoAnime(res.data))
        .catch(function (error) {
            throw (error.response);
        })
    })


    return (
        <View>
            <View style={styles.PromoAnimeimageView}>
                <Image 
                    source={{uri: promoAnime.image_url}}
                    style={{width: "100%", height: "100%"}}
                />

                <View style={styles.PromoAnimeimageViewDetail}>
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={() => {
                            props.navigation.push("DetailAnime", {
                                animeID: NUMANIME
                            })
                        }}
                    >
                        <Text style={styles.PromoAnimeTitle}>
                            {promoAnime.title}
                            <Text style={styles.promoAnimeRatting}>  ({promoAnime["score"]})</Text>
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.promoThemesNamesView}>
                        {promoAnime.themes && promoAnime.themes.map((text, index) => (
                            <Text key={index} style={styles.promoThemesNames}>
                                {text.name}
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    PromoAnimeimageView: {
        width: "100%",
        height: 370,
        position: "relative"
    },

    PromoAnimeimageViewDetail: {
        position: "absolute", 
        bottom: 25,
        left: 20
    },

    PromoAnimeTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "black",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 5
    },

    promoThemesNamesView: {
        flexDirection: 'row',
        marginTop: 7
    },

    promoThemesNames: {
        color: "black",
        backgroundColor: "white",
        marginRight: 7,
        fontWeight: 'bold',
        paddingHorizontal: 7,
        paddingVertical: 5,
        fontSize: 13,
        borderRadius: 5
    },

    promoAnimeRatting: {
        color: "#BA2525",
        fontSize: 13,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginTop: 5,
        marginLeft: 5
    }
});