import React, {useState} from 'react'
import { 
    View, StyleSheet, TouchableOpacity
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchBar from '../components/Scearch/SearchBar';
import SearchResults from '../components/Scearch/SearchResults';
import FilterBox from '../components/Filter/FilterBox';


export default function SearchScreen(props) {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <View>
            <SearchBar 
                setSearchQuery={setSearchQuery} 
                screenPage = "searchScreen"
            />

            <TouchableOpacity activeOpacity={1}>
                <View style={styles.FullSearchView}>
                    <FilterBox 
                        navigation={props.navigation}
                    />
                    <View style={styles.SearchPageMain}>
                        <SearchResults 
                            navigation={props.navigation}
                            searchQuery={searchQuery}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    FullSearchView: {
        width: "100%", 
        height: "100%", 
        backgroundColor: "black", 
        zIndex: 3,
    },

    SearchPageMain: {
        marginTop: -5,
        paddingHorizontal: 20,
        paddingVertical: 17
    }
});