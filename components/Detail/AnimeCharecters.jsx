import React, {useState, useEffect} from 'react'
import { 
    View, Text, FlatList, StyleSheet, Image, TouchableOpacity 
} from 'react-native'
import axios from 'axios'

export default function AnimeCharecters(props) {
    const [AnimeCharectprs, setAnimeCharectprs] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/anime/${props.animeID}/characters_staff`)
        .then(res => setAnimeCharectprs(res.data["characters"]))
        .catch(function (error) {
            throw (error.response);
        })
    })

    return (
        <View>
            <Text style={{marginTop: 35, fontSize: 22, fontWeight: "bold"}}>
                Characters
            </Text>

            <FlatList
                horizontal
                contentContainerStyle={styles.imageSlide}
                showsHorizontalScrollIndicator={false}
                keyExtractor={( item, index ) => index.toString()}
                data={AnimeCharectprs}
                renderItem={({ item }) => (
                    <View style={styles.charecter}>
                        <TouchableOpacity 
                            activeOpacity={.8}
                            onPress={() => {
                                props.navigation.navigate("VoiceActors", {
                                    voice_actors: item
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