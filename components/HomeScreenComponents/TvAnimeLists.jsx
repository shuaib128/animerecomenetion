import React, {useState} from 'react'
import HomeAnimeListComponents from './HomeAnimeListComponents';
import axios from 'axios';

export default function TvAnimeLists(props) {
    const [TV, setTV] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/tv`)
        .then(res => setTV(res.data["top"]))
    })

    return (
        <HomeAnimeListComponents 
            Animes={TV}
            navigation={props.navigation}
            header_title={"TV"}
            setAnimeList={setTV}
            dataType="top"
            queryUrl = "https://api.jikan.moe/v3/top/anime/1/tv"
        />
    )
}