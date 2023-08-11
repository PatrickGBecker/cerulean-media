import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Social } from '@/typings';

const query = groq`
    *[_type == "social"]{
    _id, title, url,
}
`;
type Data = {
  socials: Social[];
};

export const getSocialsStaticProps = async () => {
  return await sanityClient.fetch<Social[]>(query);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiError>
) {
  try {
    const socials = await getSocialsStaticProps();
    res.status(200).json({ socials });
  } catch (err) {
    res.status(500).json({ error: 'Error loading socials.' });
  }
}
