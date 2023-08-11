import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { SkillType } from '@/typings';

const query = groq`
    *[_type == "skill"]
`;
type Data = {
  skills: SkillType[];
};

export const getSkillsStaticProps = async () => {
  return await sanityClient.fetch<SkillType[]>(query);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiError>
) {
  try {
    const skills = await getSkillsStaticProps();
    res.status(200).json({ skills });
  } catch {
    res.status(500).json({ error: 'Error while fetching skills' });
  }
}
