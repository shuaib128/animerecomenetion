import React, {useState, useEffect} from 'react'
import {
    View, Text, FlatList, StyleSheet, Image, 
    Keyboard
} from 'react-native'
import APIServices from '../../Api/Api';
import SeachresultAnime from './SeachresultAnime';

import sharingan from "./sharingan.gif"

export default function SearchResults(props) {
    const [SearchedAnime, setSearchedAnime] = useState(null)

    useEffect(() => {
        APIServices.GetSearchedanimes(setSearchedAnime, props.searchQuery)
    }, [props.searchQuery])
    
    if (!SearchedAnime && props.searchQuery !== "") return (
        <View style={{alignItems: "center", marginTop: 50}}>
            <Image source={sharingan}/>           
            <Text style={{fontSize: 20, color: "white"}}>Loading....</Text>
        </View>
    )

    return (
        <View>
            <FlatList
                onScroll={Keyboard.dismiss}
                data={SearchedAnime}
                keyExtractor={( item ) => item.mal_id.toString()}
                renderItem={({ item }) => (
                    <SeachresultAnime 
                        image={item.image_url}
                        title={item.title.substring(0,40)}
                        synopsis={item.synopsis.substring(0,55)}
                        score={item.score}
                        navigation={props.navigation}
                        anime_id={item.mal_id}
                    />
                )}
            />
        </View>
    )
}


var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });