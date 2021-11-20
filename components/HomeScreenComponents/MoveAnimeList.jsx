import React, {useState} from 'react'
import HomeAnimeListComponents from './HomeAnimeListComponents';
import axios from 'axios';

export default function RecentAnimeList(props) {
    const [MoveAnimes, setMoveAnime] = useState(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/movie`)
        .then(res => setMoveAnime(res.data["top"]))
    })

    return (
        <HomeAnimeListComponents 
            Animes={MoveAnimes}
            navigation={props.navigation}
            header_title={"Movies"}
        />
    )
}