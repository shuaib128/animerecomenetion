import React, {useState, useRef} from 'react'
import {
    StyleSheet, View, FlatList, Image, Dimensions,
    Animated
} from 'react-native'
import axios from 'axios'


const {width, height} = Dimensions.get("screen")
const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function AnimeImageSlide(props) {
    const scrollX = useRef(new Animated.Value(0)).current
    const [AnimeImages, setAnimeImages] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/anime/${props.animeID}/pictures`)
        .then(res => setAnimeImages(res.data["pictures"]))
        .catch(function (error) {
            throw (error.response);
        })
    })


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
        </View>
    )
}


const styles = StyleSheet.create({
    animeImagesFullView: {
        width: width,
        height: height / 2
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