import NUMANIME from "../components/HomeScreenComponents/PromoanimeNum";

export default class APIServices{
  //Get the promo anime data
  static GetPromoanime(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/anime/${NUMANIME}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["image_url"])
      );
  }

  static GetPromoanimeTitle(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/anime/${NUMANIME}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["title"])
      );
  }

  static GetPromoanimeRating(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/anime/${NUMANIME}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["score"])
      );
  }

  static GetPromoanimeTheme(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/anime/${NUMANIME}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["themes"])
      );
  }

  //Get Recent anime data
  static GetRecentanimes(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/season/2021/winter`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["anime"])
      );
  }

  //Get Top anime data
  static GetTopanimes(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/top/anime/1/airing`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["top"])
      );
  }

  //Get Upcomming anime data
  static GetUpcomminganimes(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/top/anime/1/upcoming`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["top"])
      );
  }

  //Get Spetial anime data
  static GetSpetialanimes(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/top/anime/1/special`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["top"])
      );
  }

  //Get Movie anime data
  static GetMoveanimes(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/top/anime/1/movie`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["top"])
      );
  }

  //Get TV anime data
  static GetTVanimes(promoAnime_state){
    const URL = `https://api.jikan.moe/v3/top/anime/1/tv`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["top"])
      );
  }

  //Get Searched anime data
  static GetSearchedanimes(promoAnime_state, search_query){
    const URL = `https://api.jikan.moe/v3/search/anime?q=${search_query}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["results"])
      );
  }

  //Get Detail anime data
  static GetDetailedanimes(promoAnime_state, search_query){
    const URL = `https://api.jikan.moe/v3/anime/${search_query}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json)
      );
  }

  //Get Detail anime aired date data
  static GetDetailedanimesAiredDate(promoAnime_state, search_query){
    const URL = `https://api.jikan.moe/v3/anime/${search_query}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["aired"])
      );
  }

  //Get Detail anime Images data
  static GetImagesanimes(promoAnime_state, search_query){
    const URL = `https://api.jikan.moe/v3/anime/${search_query}/pictures`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["pictures"])
      );
  }

  //Get Charector anime data
  static GetCheractorsanimes(promoAnime_state, search_query){
    const URL = `https://api.jikan.moe/v3/anime/${search_query}/characters_staff`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["characters"])
      );
  }


  //Get Charector anime data
  static GetStaffanimes(promoAnime_state, search_query){
    const URL = `https://api.jikan.moe/v3/anime/${search_query}/characters_staff`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["staff"])
      );
  }


  //Get Charector anime data
  static GetRecomendetions(promoAnime_state, search_query){
    const URL = `https://api.jikan.moe/v3/anime/${search_query}/recommendations`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["recommendations"])
      );
  }

  //Get Genra anime data
  static GetAnimeGenre(promoAnime_state, search_query){
    const URL = `https://api.jikan.moe/v3/genre/anime/${search_query}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["anime"])
      );
  }


  //Get Seson by anime data
  static GetAnimeSeasonYear(promoAnime_state, search_year, season){
    const URL = `https://api.jikan.moe/v3/season/${search_year}/${season}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        promoAnime_state(json["anime"])
      );
  }
}