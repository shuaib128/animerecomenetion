import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function AnimeDescription(props) {
    const data = props.QueryedAnime

    if(data)
    {
        return (
            <View>
                <Text style={styles.detailTitle}>{data.title}</Text>
                <View style={styles.animeTypesView}>
                    {data.demographics && data.demographics.map((demographic, index) => (
                        <TouchableOpacity
                            activeOpacity={.7}
                        >
                            <Text style={styles.animeTypes} key={index}>
                                {demographic.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    {data.themes && data.themes.map((theme, index) => (
                        <TouchableOpacity
                            activeOpacity={.7}
                        >
                            <Text style={styles.animeTypes} key={index}>
                                {theme.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.airedDate}>
                    <Text style={{textAlign: 'center'}}>
                        <Text style={{fontWeight: "bold"}}>Premired: </Text>{data.premiered}
                    </Text>
                    <Text style={{textAlign: 'center', marginLeft: 10}}>
                        <Text style={{fontWeight: "bold"}}>Status: </Text>{data.status}
                    </Text>
                    <Text style={{textAlign: 'center', marginLeft: 10}}>
                        <Text style={{fontWeight: "bold"}}>Duration: </Text>{data.duration}
                    </Text>
                    <Text style={{textAlign: 'center', marginLeft: 10}}>
                        <Text style={{fontWeight: "bold"}}>Rating: </Text>{data.rating}
                    </Text>
                </View>
    
                
                <Text style={{textAlign: "center", marginTop: 30, fontSize: 25}}>
                    Storyline
                </Text>
                
                <View style={{flexDirection: "row", alignSelf: "center", marginBottom: 20}}>
                    <Text style={styles.detailReiewText}>
                        Ratting: {data.score}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={.6}
                        onPress={() => {
                            props.navigation.push("AnimeRating", {
                                animeID: data.mal_id
                            })
                        }}
                    >
                        <Text style={{color: "#BA2525", fontWeight: "bold", marginLeft: 5}}>(SEE REVIEWS)</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{marginTop: 10, letterSpacing: .5, lineHeight: 20, color: "#444444"}}>
                    {data.synopsis}
                </Text>

                <TouchableOpacity
                    activeOpacity={.6}
                    onPress={() => {
                        props.navigation.push("AnimeNews", {
                            animeID: data.mal_id
                        })
                    }}
                >
                    <Text style={{color: "#BA2525", fontWeight: "bold", marginTop: 15, fontSize: 17}}>
                        (SEE RELATED NEWS)
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    detailTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        width: "75%",
        alignSelf: "center"
    },

    animeTypesView: {
        flexDirection: "row", 
        justifyContent: "center", 
        marginTop: 17
    },

    animeTypes: {
        borderColor: "black", 
        borderWidth: 1,
        color: "black",
        padding: 7,
        marginRight: 7,
        borderRadius: 4,
    },

    airedDate:{
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },

    detailReiewText: {
        textAlign: 'center',
    },

    seeReviews: {
    }
});