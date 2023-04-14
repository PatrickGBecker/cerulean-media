import { Video } from '../typings';

export const fetchVideos = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getVideos`);

    const data = await res.json()
    const videos: Video[] = data.videos;

    return videos;
}