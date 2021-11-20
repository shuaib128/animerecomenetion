import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import axios from 'axios'

export default function AnimeStuff(props) {
    const [AnimeStuffs, setAnimeStuff] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/anime/${props.animeID}/characters_staff`)
        .then(res => setAnimeStuff(res.data["staff"]))
        .catch(function (error) {
            throw (error.response);
        })
    })

    return (
        <View>
            <Text style={{marginTop: 35, fontSize: 22, fontWeight: "bold"}}>
                Staff
            </Text>

            <FlatList
                horizontal
                contentContainerStyle={styles.imageSlide}
                showsHorizontalScrollIndicator={false}
                keyExtractor={( item, index ) => index.toString()}
                data={AnimeStuffs}
                renderItem={({ item }) => (
                    <View style={styles.charecter}>
                        <TouchableOpacity 
                            activeOpacity={.8}
                            onPress={() => {
                                props.navigation.navigate("Staff", {
                                    stuff: item
                                })
                            }}
                        >
                            <Image 
                                source={{
                                    uri: item.image_url
                                }}
                                style={styles.charectorImage}
                            />
                        </TouchableOpacity>
                        <Text style={{marginTop: 7, fontWeight: "bold"}}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    charectorImage: {
        width: "100%",
        height: 120,
        borderRadius: 10
    },

    imageSlide:{
        marginTop: 15,
    },

    charecter: {
        width: 120,
        height: 170,
        marginRight: 15
    }
});