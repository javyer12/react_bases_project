"use client";
import React, { useEffect } from "react";
import MainComponent from "./MainComponent";

export default function Football() {
  const c: number = 1;
  const [data, setData] = React.useState<undefined | Array<object>[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<undefined | string>(undefined);

  const myHeaders = new Headers();
  myHeaders.append("x-apisports-key", "687632da75d1c11b600045e683009ec3");

  const requestOptions: object = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    const fetchDataPlayers = async () => {
      try {
        const res = await fetch(
          "https://v3.football.api-sports.io/leagues",
          requestOptions,
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setData(result.response[0]);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
        setLoading(false);
      }
    };
    fetchDataPlayers();
  }, []);

//   fetch("https://v3.football.api-sports.io/players/profiles", requestOptions)
//     .then((response) => response.json())
//     .then((result) => console.log("No. " + result.response[0].player.name))
//     .catch((error) => console.log("error", error));

  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (loading || data)
    return <div className="text-gray-500 p-4">Loading...</div>;

  return (
    <div className="text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Football Players</h1>
      {/* {data?.length > 0 ? (
        <ul className="list-disc pl-5">
          {data.map((item, index) => (
            <li key={index} className="mb-2">
             {item} - {item}
            </li>
            ))}
        </ul>
        ) : (
            <p>No players found.</p>
        )} */}
      <MainComponent title="  " value="player name" />
    </div>
  );
}
