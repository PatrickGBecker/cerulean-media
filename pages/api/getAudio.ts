import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Audio } from '@/typings';

const query = groq`
    *[_type == "audio"]
`;
type Data = {
  audio: Audio[];
};

export const getAudioStaticProps = async () => {
  return await sanityClient.fetch<Audio[]>(query);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiError>
) {
  try {
    const audio = await getAudioStaticProps();
    res.status(200).json({ audio });
  } catch (err) {
    res.status(500).json({ error: 'Error loading audio.' });
  }
}
