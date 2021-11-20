import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import APIServices from '../../Api/Api';
import Gernes from './FilterPickArray'

export default function GenreFilterBox(props) {
    const MonitorPickerValueChange = (value) => {
        props.setSelectedLanguage(value)
        APIServices.GetAnimeGenre(props.setAnimeQueryGenre, value)
        props.setIsPicker("dactive")
    }

    return (
        <View style={[styles.Pickers, {display: props.IsPicker === "dactive" ? "none" : "flex"}]}>
            <Text style={styles.Genre}>Genre</Text>
            <View style={styles.pikerBox}>
                <Picker
                    style={styles.PickerInput}
                    selectedValue={props.selectedLanguage}
                    dropdownIconColor="white"
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        MonitorPickerValueChange(itemValue)
                    }
                >
                    {Gernes.map((item) => (
                        <Picker.Item 
                            label={item.pick} 
                            value={item.index}
                            key={item.index}
                        />
                    ))}
                </Picker>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
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