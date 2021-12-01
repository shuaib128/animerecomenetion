import React, {useState} from 'react'
import HomeAnimeListComponents from './HomeAnimeListComponents';
import axios from 'axios';

export default function RecentAnimeList(props) {
    const [recentAnimes, setRecentAnimes] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/season/2021/winter`)
        .then(res => setRecentAnimes(res.data["anime"]))
    })

    return (
        <HomeAnimeListComponents 
            Animes={recentAnimes}
            navigation={props.navigation}
            header_title={"Recent Anime"}
            setAnimeList={setRecentAnimes}
            dataType="anime"
            queryUrl="https://api.jikan.moe/v3/season/2021/winter"
        />
    )
}