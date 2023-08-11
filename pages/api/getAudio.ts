import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Audio } from "@/typings";

const query = groq`
    *[_type == "audio"]
`
type Data = {
    audio: Audio[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const audio: Audio[] = await sanityClient.fetch(query)
    res.status(200).json({ audio })
}