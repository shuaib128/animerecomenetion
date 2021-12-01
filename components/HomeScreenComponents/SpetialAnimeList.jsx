import React, {useState} from 'react'
import HomeAnimeListComponents from './HomeAnimeListComponents';
import axios from 'axios';

export default function RecentAnimeList(props) {
    const [spetialAnimes, setSpetial] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/special`)
        .then(res => setSpetial(res.data["top"]))
    })

    return (
        <HomeAnimeListComponents 
            Animes={spetialAnimes}
            navigation={props.navigation}
            header_title={"Spetial Anime"}
            setAnimeList={setSpetial}
            dataType="top"
            queryUrl = "https://api.jikan.moe/v3/top/anime/1/special"
        />
    )
}