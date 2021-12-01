import React, {useState, useRef, useEffect} from 'react'
import {
    StyleSheet, View, Image, Dimensions,
    Animated, Button
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'


const {width, height} = Dimensions.get("screen")
const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function AnimeImageSlide(props) {
    const [WatchlistState, setWatchlistState] = useState()
    const [WatchlistID, setWatchlistID] = useState()

    const loaded = async () => {
        try{
          let watchList = await AsyncStorage.getItem("Wishlist")
          let watchListID = await AsyncStorage.getItem("WishlistID")
    
          if(watchList !== null){
            setWatchlistState(watchList)
            setWatchlistID(watchListID)
          }
    
        }catch{err}{
            
        }
    }
    
    useEffect(() => {
        loaded()
    }, [])
    

    const scrollX = useRef(new Animated.Value(0)).current
    const [AnimeImages, setAnimeImages] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/anime/${props.animeID}/pictures`)
        .then(res => setAnimeImages(res.data["pictures"]))
        .catch(function (error) {
            throw (error.response);
        })
    })

    const save = async () => {
        try{
            AsyncStorage.getItem('Wishlist')
            .then((item) => {
                const wishlist = item ? JSON.parse(item) : []
                wishlist.push(props.QueryedAnime)
                setWatchlistState(wishlist)
                AsyncStorage.setItem('Wishlist', JSON.stringify(wishlist))
            })
        }catch{err}{
            
        }
    }

    const saveID = async () => {
        try{
            AsyncStorage.getItem('WishlistID')
            .then((item) => {
                const wishlist = item ? JSON.parse(item) : []
                wishlist.push(props.animeID)
                setWatchlistID(wishlist)
                AsyncStorage.setItem('WishlistID', JSON.stringify(wishlist))
            })
        }catch{err}{
            
        }
    }

    const remove = async () => {
        try{
            let watchLists = await AsyncStorage.getItem("Wishlist")
            watchLists = JSON.parse(watchLists)
            AsyncStorage.getItem('WishlistID')
            .then((item) => {
                const wishlist = item ? JSON.parse(item) : []
                
                if(wishlist.indexOf(props.animeID) !== -1){
                    watchLists.splice(wishlist.indexOf(props.animeID), 1)
                    wishlist.splice(wishlist.indexOf(props.animeID), 1)
                }
                setWatchlistID(wishlist)
                AsyncStorage.setItem('WishlistID', JSON.stringify(wishlist))
                AsyncStorage.setItem('Wishlist', JSON.stringify(watchLists))
            })
        }catch{err}{
            
        }
    }


    const watchlistAddHandler = () => {
        save()
        saveID()
    }
    const watchlistRemovwHandler = () => {
        remove()
    }

    return (
        <View style={styles.animeImagesFullView}>
            <View style={StyleSheet.absoluteFillObject}>
              {AnimeImages && AnimeImages.map((image, index) => {
                const inputRange = [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width
                ]

                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [0, 1, 0]
                })

                return <Animated.Image 
                  key={`image-${index}`}
                  source={{uri: image.large}}
                  style={[
                    StyleSheet.absoluteFillObject,
                    {opacity}
                  ]}
                  blurRadius={25}
                />
              })}
            </View>

            <Animated.FlatList
                horizontal
                pagingEnabled
                contentContainerStyle={styles.imageSlide}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true}
                )}
                keyExtractor={( item, index ) => index.toString()}
                data={AnimeImages}
                renderItem={({ item }) => (
                    <View style={styles.image_slide}>
                        <Image 
                            source={{
                                uri: item.large
                            }}
                            style={styles.animeSlideImage}
                        />
                    </View>
                )}
            />
            
            <View style={styles.addListButtonView}>
                {WatchlistID && WatchlistID.includes(props.animeID) ?
                    <Button 
                        onPress={watchlistRemovwHandler}
                        title="Remove"
                    /> :
                    <Button 
                        onPress={watchlistAddHandler}
                        title="Add"
                    />
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    animeImagesFullView: {
        width: width,
        height: height / 2,
        position: "relative"
    },

    addListButtonView: {
        position: "absolute",
        bottom: 15,
        left: 15,
    },

    animeSlideImage: {
        width: imageW / .85,
        height: imageH / 1.23,
        resizeMode: "cover",
        borderRadius: 10
    },

    imageSlide: {
        
    },

    image_slide: {
        width, justifyContent: "center", 
        alignItems: "center",
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20
    }
});