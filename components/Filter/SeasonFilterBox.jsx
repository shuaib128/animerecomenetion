import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import YearPicker from './YearPicker';
import APIServices from '../../Api/Api';

const seasons = ["None", "summer", "spring", "fall", "winter"]


export default function SeasonFilterBox(props) {
    const [Year, setYear] = useState("None")
    const [Season, setSeason] = useState("None")

    const MonitorPickerValueChange = () => {
        if(Year !== "None" && Season !== "None")
        {
            APIServices.GetAnimeSeasonYear(props.setAnimeQueryGenre, Year, Season)
            props.setIsPicker("dactive")
            props.setSelectedLanguage("")
            setYear("None")
            setSeason("None")
        }else
        {
            Alert.alert("Need Both Year and Season")
        }
    }

    return (
        <View style={styles.filterBySeans}>
            <View style={[styles.Pickers, {display: props.IsPicker === "dactive" ? "none" : "flex", width: "50%"}]}>
                <Text style={styles.Genre}>Year</Text>
                <View style={styles.pikerBox}>
                    <Picker
                        style={styles.PickerInput}
                        selectedValue={Year}
                        dropdownIconColor="white"
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setYear(itemValue)
                        }
                    >
                        {YearPicker.map((item, index) => (
                            <Picker.Item 
                                label={item.toString()} 
                                value={item.toString()}
                                key={index}
                            />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={[styles.Pickers, {display: props.IsPicker === "dactive" ? "none" : "flex", width: "50%"}]}>
                <Text style={styles.Genre}>Season</Text>
                <View style={styles.pikerBox}>
                    <Picker
                        style={styles.PickerInput}
                        selectedValue={Season}
                        dropdownIconColor="white"
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSeason(itemValue)
                        }
                    >
                        {seasons.map((item, index) => (
                            <Picker.Item 
                                label={item} 
                                value={item}
                                key={index}
                            />
                        ))}
                    </Picker>
                </View>
                <View style={{marginTop: 10, width: 100, alignSelf: "flex-end"}}>
                    <Button 
                        title="Search"
                        onPress={MonitorPickerValueChange}
                    />
                </View>
            </View>
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