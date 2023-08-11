import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Experience } from '@/typings';

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

type Data = {
  experiences: Experience[];
};

export const getExperiencesStaticPops = async () => {
  return await sanityClient.fetch<Experience[]>(query);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiError>
) {
  try {
    const experiences = await getExperiencesStaticPops();
    res.status(200).json({ experiences });
  } catch (err) {
    res.status(500).json({ error: 'Error loading experience.' });
  }
}
