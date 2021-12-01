import React, {useState} from 'react'
import { 
    View, Text, StyleSheet, TouchableOpacity,
    FlatList, Keyboard, Image
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import SeachresultAnime from '../Scearch/SeachresultAnime';
import GenreFilterBox from './GenreFilterBox';
import SeasonFilterBox from './SeasonFilterBox';

import sharingan from "./sharingan.gif"

export default function FilterBox(props) {
    const [IsPicker, setIsPicker] = useState("dactive");
    const [AnimeQueryGenre, setAnimeQueryGenre] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState("None");

    const IsActivePIcker = () => {
        if(IsPicker === "dactive")
        {
            setIsPicker("active")
            props.setSearchQuery("")
            setSelectedLanguage("None")
            setAnimeQueryGenre()
        }else
        {
            setIsPicker("dactive")
            props.setSearchQuery("")          
        }
    }

    const DeactivePIcker = () => {
        setIsPicker("dactive")
        setSelectedLanguage("None")
        setAnimeQueryGenre()
    }

    if (!AnimeQueryGenre && selectedLanguage !== "None") return (
        <View style={{alignItems: "center", marginTop: 50}}>
            <Image source={sharingan}/>           
            <Text style={{fontSize: 20, color: "white"}}>Loading....</Text>
        </View>
    )

    return (
        // Full Filter View
        <View style={styles.fullFiletrView}> 
            {/* Filter Box */}
            <View style={styles.filterBox}>
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={IsActivePIcker}
                    style={{marginRight: 10}}
                >
                    <Text style={styles.filterText}>
                        <Ionicons 
                            style={styles.searchIconMic} 
                            name="funnel" 
                            size={16} 
                            color="black"
                        />
                        Filter
                    </Text>
                </TouchableOpacity>

                {/* Cancel Btn */}
                {selectedLanguage !== "None" ?
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={DeactivePIcker}
                    >
                        <Text style={styles.closeFilter}>Close</Text>
                    </TouchableOpacity>
                    :
                    <View></View>
                }
            </View>

            {/* Picker Box */}
            <GenreFilterBox 
                IsPicker={IsPicker}
                selectedLanguage={selectedLanguage}
                setAnimeQueryGenre={setAnimeQueryGenre}
                setSelectedLanguage={setSelectedLanguage}
                setIsPicker={setIsPicker}
            />

            {/* Picker by season and year */}
            <SeasonFilterBox 
                IsPicker={IsPicker}
                selectedLanguage={selectedLanguage}
                setAnimeQueryGenre={setAnimeQueryGenre}
                setSelectedLanguage={setSelectedLanguage}
                setIsPicker={setIsPicker}
            />

            {/* Filtered data */}
            {selectedLanguage !== "None" ?
                <View style={{marginTop: 20, paddingHorizontal: 20,}}>
                    <FlatList
                        onScroll={Keyboard.dismiss}
                        data={AnimeQueryGenre}
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
                :
                <View></View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    fullFiletrView: {
        marginTop: 85
    },

    filterBox: {
        width: 90,
        marginLeft: 22,
        flexDirection: "row"
    },

    filterText:{
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 18,
        borderRadius: 4,
    },

    closeFilter:{
        backgroundColor: "red",
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 17,
        borderRadius: 4,
        color: 'white'
    },

    Genre:{
        color: "white", 
        fontWeight: "bold",
        fontSize: 17
    },

    Pickers:{
        paddingHorizontal: 18,
        marginTop: 15,
        marginBottom: 10
    },

    PickerInput: {
        borderColor: "red", 
        color:"white", 
        borderWidth: 1,
    },

    pikerBox: {
        borderWidth: 1, 
        borderColor: "#706C61",
        borderRadius: 5,
        marginTop: 7
    },

    filterBySeans:{
        flexDirection: "row"
    }
});