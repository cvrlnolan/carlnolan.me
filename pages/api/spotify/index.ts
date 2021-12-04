import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const spotifyApi = "https://api.spotify.com/v1/me/player/currently-playing";
  try {
    const response = await axios.get(spotifyApi, {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
      },
    });
    const data = response.data;
    console.log(data);
    res.status(200).json({ data });
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
