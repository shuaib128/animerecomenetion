import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import axios from 'axios'
import sharingan from "./sharingan.gif"

export default function AnimeRating(props) {
    const { animeID } = props.route.params
    const [Loaded, setLoaded] = useState(false)

    const [Reviews, setReviews] = useState(() => {
        return axios.get(`https://api.jikan.moe/v3/anime/${animeID}/reviews/1`)
        .then(res => {
            setReviews(res.data["reviews"])
            setLoaded(true)
        })
        .catch(function (error) {
            throw (error.response);
        })
    })
    if (!Loaded) return (
        <View style={styles.FullReViewScreen}>
            <View style={{alignItems: "center", marginTop: 50}}>
                <Image source={sharingan}/>           
                <Text style={{fontSize: 20, color: "white"}}>Loading....</Text>
            </View>
        </View>
    )

    return (
        <View style={styles.FullReViewScreen}>
            <FlatList
                // contentContainerStyle={styles.list}
                keyExtractor={( item ) => item.mal_id.toString()}
                data={Reviews}
                renderItem={({ item }) => (
                    <View style={styles.reviewView}>
                        <View style={styles.reviewHead}>
                            <View style={styles.imageSide}>
                                <Image 
                                    source={{
                                        uri: item.reviewer.image_url
                                    }}
                                    style={styles.charectorImage}
                                />
                                <View style={{marginTop: 5}}>
                                    <Text style={{color:"white"}}>{item.reviewer.username}</Text>
                                    <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                                        <Text style={styles.rev_txt}>Overall: {item.reviewer.scores.overall}</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={styles.rev_date}>{item.date.slice(0, 10)}</Text>
                        </View>

                        <View style={[{marginTop: 15}, styles.rev_des]}>
                            <Text style={{color:"white"}}>{item.content}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    FullReViewScreen:{
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "black",
        color: "white",
        flex: 1
    },

    reviewView:{
        marginBottom: 50,
        color: "white"
    },

    reviewHead:{
        flexDirection: "row",
        justifyContent: "space-between",
        color: "white"
    },

    rev_des:{
        borderStyle: 'dashed',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        paddingHorizontal: 13,
        color: "white"
    },

    imageSide:{
        flexDirection: "row",
        width: "50%",
        color: "white"
    },

    charectorImage:{
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    },

    rev_txt:{
        marginRight: 10,
        fontWeight: "bold",
        color: "white"
    },

    rev_date: {
        marginTop: 20,
        color: "gray",
        fontSize: 13,
    }
});