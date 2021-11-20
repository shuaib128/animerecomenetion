import React, {useState} from 'react'
import {
    View, Text, StyleSheet, FlatList, Image, Linking
} from 'react-native'
import axios from 'axios'

export default function AnimeNews(props) {
    const { animeID } = props.route.params

    const [AnimeNews, setAnimeNews] = useState(() => {
        return axios.get(`https://api.jikan.moe/v3/anime/${animeID}/news`)
        .then(res => setAnimeNews(res.data["articles"]))
        .catch(function (error) {
            throw (error.response);
        })
    })

    return (
        <View style={styles.fullDetailView}>
            <FlatList
                contentContainerStyle={styles.list}
                keyExtractor={( item, index ) => index.toString()}
                data={AnimeNews}
                renderItem={({ item }) => (
                    <View style={styles.fullNewsView}>
                        <Image style={styles.recentAnimeImg} source={{ uri: item.image_url }}/>
                        <View style={{paddingHorizontal: 10}}>
                            <Text style={styles.newsTitle}
                                onPress={() => Linking.openURL(item.url)}
                            >
                                {item.title}
                            </Text>
                            <Text style={styles.newsDate}>{item.date.slice(0, 10)}</Text>
                            <Text style={styles.newsAuthor}
                                onPress={() => Linking.openURL(item.author_url)}
                            >
                                {item.author_name}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    fullDetailView: {
        backgroundColor: "white",
        height: "100%",
        paddingHorizontal: 17,
    },

    list:{

    },

    recentAnimeImg:{
        width: "100%",
        height: 190,
        borderRadius: 10
    },

    fullNewsView: {
        marginTop: 25,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10
    },

    newsTitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 10
    },

    newsDate: {
        color: "gray",
        marginTop: 7
    },

    newsAuthor: {
        color: "gray",
        fontWeight: "bold"
    },

});