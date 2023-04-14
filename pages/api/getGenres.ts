import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Genre } from "@/typings";

const query = groq`
    *[_type == 'genre'] {
    _id, title,
    'videos': *[_type == 'video' && references(^._id)]
}
`
type Data = {
    genres: Genre[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const genres: Genre[] = await sanityClient.fetch(query)
    res.status(200).json({ genres })
}