import { HOST_URL, BASE_URL, API_KEY, YOUTUBE_HOST_URL } from '.';

export const exerciseOptions = {
    method: 'GET',
    url: `${BASE_URL}/exercises/bodyPartList`,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': HOST_URL
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': YOUTUBE_HOST_URL
    }
};

export const fetchData = async ( url, options ) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}