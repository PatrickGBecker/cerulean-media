import { Audio } from '../typings';

export const fetchAudio = async () => {
  const res = await fetch(`http://localhost:3333/api/getAudio`);

  const data = await res.json();
  const audio: Audio[] = data.audio;

  return audio;
};
