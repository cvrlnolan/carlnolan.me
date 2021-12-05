import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getAccessToken } from "@/lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const spotifyApi = "https://api.spotify.com/v1/me/player/currently-playing";
  try {
    const { access_token } = await getAccessToken();
    const response = await axios.get(spotifyApi, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const data = response.data;
    res.status(200).json({ data });
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
