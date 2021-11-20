import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function VoiceActors(props) {
    const { voice_actors } = props.route.params

    return (
        <ScrollView style={{paddingTop: 55, backgroundColor: "white", height: "100%"}}>
            <View style={styles.fullCarView}>
                {voice_actors.voice_actors && voice_actors.voice_actors.map((char, index) => (
                    <View key={index} style={styles.charView}>
                        <Image 
                            source={{
                                uri: char.image_url
                            }}
                            style={styles.charectorImage}
                        />

                        <View style={styles.charecterDescription}>
                            <Text style={styles.voiceName}>{char.name}</Text>
                            <Text style={styles.voiceLan}>{char.language}</Text>
                        </View>
                    </View>
                ))}
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