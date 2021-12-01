import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import RecentAnimeList from './RecentAnimeList';
import TopAnimeList from './TopAnimeList';
import UpcommingAnimeList from './UpcommingAnimeList';
import SpetialAnimeList from './SpetialAnimeList';
import MoveAnimeList from './MoveAnimeList';
import TvAnimeLists from './TvAnimeLists';
import DetailAnime from '../LoadingComponents/DetailAnime';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AnimeLists(props) {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, 3000);
    }, []);

    return (
        <View style={styles.animeListView}>
            <View>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPressIn={() => {
                        props.navigation && props.navigation.navigate('Wishlist')
                    }}
                >
                    <Text style={styles.watchlistbtn}>My Watchlist</Text>
                </TouchableOpacity>
            </View>

            <RecentAnimeList 
                navigation={props.navigation}
            />
            <TopAnimeList 
                navigation={props.navigation}
            />
            <UpcommingAnimeList 
                navigation={props.navigation}
            />
            {isShown ?
                <SpetialAnimeList 
                    navigation={props.navigation}
                />
                :<DetailAnime />
            }
            {isShown ?
                <MoveAnimeList 
                    navigation={props.navigation}
                />
                :<View></View>
            }
            {isShown ?
                <TvAnimeLists 
                    navigation={props.navigation}
                />
                :<View></View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    animeListView: {
        paddingHorizontal: 20,
        paddingVertical: 17,
        backgroundColor: "white"
    },

    watchlistbtn: {
        fontSize: 17,
        fontWeight: "bold",
        alignSelf: "flex-end"
    }
});