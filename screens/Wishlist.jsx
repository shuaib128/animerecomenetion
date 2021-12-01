import React, {useState, useEffect} from 'react'
import { View, FlatList, Keyboard, StyleSheet, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SeachresultAnime from '../components/Scearch/SeachresultAnime'

export default function Wishlist(props) {
    const [WishListsQuery, setWishListsQuery] = useState([])
    const getLists = async () => {
        try{
            AsyncStorage.getItem('Wishlist')
            .then((item) => {
                const wishlist = item ? JSON.parse(item) : []
                setWishListsQuery(wishlist)
            })
        }catch{err}{
            
        }
    }

    useEffect(() => {
        getLists()
    }, [])

    return (
        <>
            {WishListsQuery.length !== 0 ?
                <View style={styles.wishlistFullView}>
                    <Text style={styles.widhlist_title}>Needed to be watched</Text>
        
                    <FlatList
                        onScroll={Keyboard.dismiss}
                        data={WishListsQuery}
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
                </View> :
                <View style={styles.nolistview}>
                    <Text style={styles.nowidhlist_title}>No Wishlist Added</Text>
                </View>
            }
        </>
    )
}


const styles = StyleSheet.create({
    wishlistFullView: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 80
    },

    widhlist_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10
    },

    nolistview:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});