import React from 'react'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import PromoAnime from '../components/HomeScreenComponents/PromoAnime';
import AnimeLists from '../components/HomeScreenComponents/AnimeLists';
import axios from 'axios';
import BackHomeBtn from '../components/Scearch/BackHomeBtn';
import HomeScreenSearchBUutton from '../components/Scearch/HomeScreenSearchBUutton';


export default function Home(props) {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        axios.get(`https://api.jikan.moe/v3/season/2021/winter`)
        .then(res => setRecentAnimes(res.data["anime"]))
        axios.get(`https://api.jikan.moe/v3/top/anime/1/airing`)
        .then(res => setTopAnimes(res.data["top"]))
        axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
        .then(res => setUpcomming(res.data["top"]))
        axios.get(`https://api.jikan.moe/v3/top/anime/1/special`)
        .then(res => setSpetial(res.data["top"]))
        axios.get(`https://api.jikan.moe/v3/top/anime/1/movie`)
        .then(res => setMoveAnime(res.data["top"]))
        axios.get(`https://api.jikan.moe/v3/top/anime/1/tv`)
        .then(res => setTV(res.data["top"]))

        setRefreshing(false)
    }, []);


    return (
        <View>
            <BackHomeBtn navigation={props.navigation}/>
            <HomeScreenSearchBUutton 
                navigation={props.navigation}
            />
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {/* Promo anime view */}
                <PromoAnime 
                    navigation={props.navigation}
                />

                {/* List all animes */}
                <AnimeLists 
                    navigation={props.navigation}
                />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

});