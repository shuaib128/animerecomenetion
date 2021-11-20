import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import AnimeListsAnime from '../HomeScreenComponents/AnimeListsAnime'
import axios from 'axios'


export default function AnimeRecomendetions(props) {
    const [Recomendetions, setRecomendetions] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/anime/${props.animeID}/recommendations`)
        .then(res => setRecomendetions(res.data["recommendations"]))
        .catch(function (error) {
            throw(error.response);
        })
    })
    
    return (
        <View style={styles.recentAnimeList}>
            <View style={styles.recentSeeAllView}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Recommendations</Text>
                <Text style={styles.sellAllTxt}>SEE ALL</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={( item ) => item.mal_id.toString()}
                data={Recomendetions}
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
        marginTop: 10,
        paddingTop: 25,
    },

    list: {
        
    },

    recentSeeAllView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },

    sellAllTxt:{
        fontSize: 11, 
        fontWeight: "bold", 
        marginTop: 4, 
        color: "#9E9E9E",
        letterSpacing: 1,
    }
});