import { Audio } from '../typings';

export const fetchAudio = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAudio`);

  const data = await res.json();
  const audio: Audio[] = data.audio;

  return audio;
};
