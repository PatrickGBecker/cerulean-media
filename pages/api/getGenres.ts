import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Genre } from '@/typings';

const query = groq`
    *[_type == 'genre'] {
    _id, title, order,
    'videos': *[_type == 'video' && references(^._id)]
}
`;
type Data = {
  genres: Genre[];
};

export const getGenreStaticProps = async () => {
  return await sanityClient.fetch<Genre[]>(query);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiError>
) {
  try {
    const genres = await getGenreStaticProps();
    res.status(200).json({ genres });
  } catch (err) {
    res.status(500).json({ error: 'Error loading genres' });
  }
}
