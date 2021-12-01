import React, {useState} from 'react'
import HomeAnimeListComponents from './HomeAnimeListComponents';
import axios from 'axios';

export default function RecentAnimeList(props) {
    const [topAnimes, setTopAnimes] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/airing`)
        .then(res => setTopAnimes(res.data["top"]))
    })

    return (
        <HomeAnimeListComponents 
            Animes={topAnimes}
            navigation={props.navigation}
            header_title={"Top Anime"}
            setAnimeList={setTopAnimes}
            dataType="top"
            queryUrl = "https://api.jikan.moe/v3/top/anime/1/airing"
        />
    )
}