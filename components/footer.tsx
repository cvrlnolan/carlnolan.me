import React from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import SpotifyLogo from "@/components/spotifyLogo";

const Footer = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data: response, error } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 1000,
  });

  // if (response) {
  //   console.log(response);
  // }

  const renderArtists = (artists: any) => {
    if (artists) {
      const len = artists.length;
      let artistNames = [];
      let artistsString: string;
      for (let i = 0; i < len; i++) {
        artistNames.push(artists[i].name);
      }
      artistsString = artistNames.join(", ");
      return artistsString;
    }
  };

  return (
    <>
      <div className="flex-col w-full md:w-3/5 mt-6 mx-auto items-center">
        <div className="w-full h-0.5 bg-gray-300 dark:bg-gray-600 mt-8 mb-4"></div>
        <div className="flex-col w-full p-4 space-y-8">
          <div className="flex space-x-2 items-center">
            <div className="w-8 h-8">
              <SpotifyLogo />{" "}
            </div>
            {response?.data === "" ? (
              <span className="inline-flex">Not Playing - Spotify</span>
            ) : (
              <span className="inline-flex truncate">
                {response?.data.item?.name} -{" "}
                {renderArtists(response?.data.item?.artists)}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ul className="block space-y-4">
              <Link href="/" passHref>
                <li className="link">Home</li>
              </Link>
              <Link href="/projects" passHref>
                <li className="link">Projects</li>
              </Link>
              <Link href="/snippets" passHref>
                <li className="link">Snippetyard</li>
              </Link>
            </ul>
            <ul className="block space-y-4">
              <Link href="https://github.com/cvrlnolan" passHref>
                <li className="link">GitHub</li>
              </Link>
              <Link href="https://twitter.com" passHref>
                <li className="link">Twitter</li>
              </Link>
              <Link href="mailto:georgecvrl@gmail.com" passHref>
                <li className="link">Mail</li>
              </Link>
            </ul>
            <ul className="block space-y-4">
              <Link href="#" passHref>
                <li className="link">Resume</li>
              </Link>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              2021 Copyright &copy; Carl Nolan
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
