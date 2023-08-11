import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { PageInfo } from '@/typings';

const query = groq`
    *[_type == "pageInfo"]
`;

type Data = {
  pageInfo: PageInfo[];
};

export const getPageStaticProps = async () => {
  return await sanityClient.fetch<PageInfo[]>(query);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiError>
) {
  try {
    const pageInfo = await getPageStaticProps();
    res.status(200).json({ pageInfo });
  } catch (err) {
    res.status(500).json({ error: 'Error loading page info.' });
  }
}
