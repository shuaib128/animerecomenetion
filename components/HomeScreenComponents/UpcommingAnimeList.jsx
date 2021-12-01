import React, {useState} from 'react'
import HomeAnimeListComponents from './HomeAnimeListComponents';
import axios from 'axios';

export default function RecentAnimeList(props) {
    const [upcommingAnimes, setUpcomming] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
        .then(res => setUpcomming(res.data["top"]))
    })

    return (
        <HomeAnimeListComponents 
            Animes={upcommingAnimes}
            navigation={props.navigation}
            header_title={"Upcomming Anime"}
            setAnimeList={setUpcomming}
            dataType="top"
            queryUrl = "https://api.jikan.moe/v3/top/anime/1/upcoming"
        />
    )
}