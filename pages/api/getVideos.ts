import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Video } from '@/typings';

const query = groq`
    *[_type == "video"]
`;
type Data = {
  videos: Video[];
};

export const getVideoStaticProps = async () => {
  return await sanityClient.fetch<Video[]>(query);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiError>
) {
  try {
    const videos = await getVideoStaticProps();
    res.status(200).json({ videos });
  } catch (err) {
    res.status(500).json({ error: 'Error loading videos.' });
  }
}
