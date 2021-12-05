import axios from "axios";
import queryString from "query-string";

const clientAuth = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

export async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      queryString.stringify({
        grant_type: "refresh_token",
        refresh_token: `${process.env.SPOTIFY_REFRESH_TOKEN}`,
      }),
      {
        headers: {
          Authorization: `Basic ${clientAuth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const data = response.data;
    return data;
  } catch (e: any) {
    console.log(e);
  }
}
