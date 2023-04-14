import { Genre } from '../typings';

export const fetchGenres = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getGenres`);

    const data = await res.json()
    const genres: Genre[] = data.genres;

    return genres;
}