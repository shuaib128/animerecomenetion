import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Staff(props) {
    const { stuff } = props.route.params

    return (
        <ScrollView style={{paddingTop: 55, backgroundColor: "white", height: "100%"}}>
            <View style={styles.fullCarView}>
                <View style={styles.charView}>
                    <Image 
                        source={{
                            uri: stuff.image_url
                        }}
                        style={styles.charectorImage}
                    />

                    <View style={styles.charecterDescription}>
                        <Text style={styles.voiceName}>{stuff.name}</Text>
                        <Text style={styles.voiceLan}>{stuff.positions} </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    fullCarView: {
        height: "100%",
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    charectorImage:{
        width: "50%",
        height: 150
    },

    charView:{
        marginBottom: 17,
        flexDirection: "row",
        borderRadius: 10
    },

    charecterDescription: {
        backgroundColor: "black",
        width: "50%",
        padding: 10
    },

    voiceName: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },

    voiceLan: {
        color: "white"
    }
});