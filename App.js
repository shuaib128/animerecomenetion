import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, SafeAreaView, StatusBar as Stas,
AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import all screens
import Home from './screens/Home';
import SearchScreen from './screens/SearchScreen';
import DetailedAnime from './screens/DetailedAnime';
import VoiceActors from './screens/VoiceActors';
import Staff from './screens/Staff';
import AnimeRating from './screens/AnimeRating';
import AnimeNews from './screens/AnimeNews';


const Stack = createNativeStackNavigator();
export default function App() {

  // const load = async () => {
  //   try{
  //     let loggedStatus = await AsyncStorage.getItem("IsLoggedIn")

  //     if (loggedStatus === "loggedin"){
  //       setIsLoggedIn(false)
  //     }else{
  //       setIsLoggedIn(false)
  //     }
  //   }catch{err}{
  //     alert(err)
  //   }
  // }

  // useEffect(() => {
  //   load()
  // }, [])

  return (
    <SafeAreaView style={styles.FullAppView}>      
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="All Anime" component={Home} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="DetailAnime" component={DetailedAnime} />
          <Stack.Screen name="VoiceActors" component={VoiceActors} />
          <Stack.Screen name="Staff" component={Staff} />
          <Stack.Screen name="AnimeRating" component={AnimeRating} />
          <Stack.Screen name="AnimeNews" component={AnimeNews} />
        </Stack.Navigator>
      </NavigationContainer>    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FullAppView: {
    marginTop: Platform.OS === 'android' ? Stas.currentHeight : 0,
    flex: 1
  }
});
