import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import AnimeListsAnime from './AnimeListsAnime'

export default function HomeAnimeListComponents(props) {
    return (
        <View style={styles.recentAnimeList}>
            <View style={styles.recentSeeAllView}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>{props.header_title}</Text>
                <Text style={styles.sellAllTxt}>SEE ALL</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={( item ) => item.mal_id.toString()}
                data={props.Animes}
                renderItem={({ item }) => (
                    <AnimeListsAnime
                        navigation={props.navigation}
                        anime_id={item.mal_id}
                        image={item.image_url}
                        title={item.title.substring(0,20)}
                        score={item.score}
                    />
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    recentAnimeList:{
        paddingTop: 13,
    },

    list: {
        
    },

    recentSeeAllView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15
    },

    sellAllTxt:{
        fontSize: 11, 
        fontWeight: "bold", 
        marginTop: 4, 
        color: "#9E9E9E",
        letterSpacing: 1,
    }
});