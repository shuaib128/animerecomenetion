import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import axios from 'axios'
import AnimeImageSlide from '../components/Detail/AnimeImageSlide'
import AnimeDescription from '../components/Detail/AnimeDescription'
import AnimeCharecters from '../components/Detail/AnimeCharecters'
import AnimeStuff from '../components/Detail/AnimeStuff'
import AnimeRecomendetions from '../components/Detail/AnimeRecomendetions'
import HomeScreenSearchBUutton from '../components/Scearch/HomeScreenSearchBUutton'
import DetailAnime from '../components/LoadingComponents/DetailAnime'
import BackHomeBtn from '../components/Scearch/BackHomeBtn'

export default function DetailedAnime(props) {
    const { animeID } = props.route.params
    const [isShown, setIsShown] = useState(false);
    const [isImageShown, setImageShown] = useState(false);
    const [QueryedAnime, setQueryedAnime] = useState(() => {
        return axios.get(`https://api.jikan.moe/v3/anime/${animeID}`)
        .then(res => setQueryedAnime(res.data))
        .catch(function (error) {
            throw (error.response);
        })
    })

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, 4000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setImageShown(true);
        }, 1000);
    }, []);


    if(QueryedAnime){
        return (
            <View style={styles.fullDetailView}>
                <BackHomeBtn navigation={props.navigation}/>
                <HomeScreenSearchBUutton
                    navigation={props.navigation}
                />
                <ScrollView>
                    {isImageShown ?
                        <AnimeImageSlide animeID={animeID} />
                        :<DetailAnime />
                    }

                    <View style={styles.animeDetailDescriptionView}>
                        <AnimeDescription 
                            QueryedAnime={QueryedAnime}
                            animeID={animeID}
                            navigation={props.navigation}
                        />
                        {isShown ? 
                            <AnimeCharecters
                                animeID={animeID}
                                navigation={props.navigation}
                            />
                            :<DetailAnime />
                        }
                        {isImageShown ? 
                            <AnimeStuff
                                animeID={animeID}
                                navigation={props.navigation}
                            />
                            :<DetailAnime />
                        }
                        {isShown ? 
                            <AnimeRecomendetions
                                animeID={animeID}
                                navigation={props.navigation}
                            />
                            :<DetailAnime />
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    fullDetailView: {
        backgroundColor: "white",
        height: "100%"
    },

    animeDetailDescriptionView: {
        paddingHorizontal: 20,
        paddingVertical: 27
    }
});