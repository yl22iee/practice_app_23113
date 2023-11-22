import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { nowPlaying } from "../../api";

export const Home = () => {
  const [nowPlayingData, setnowPlayingData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        //비구조화 할당을 사용하여 nowPlaying을 호출하여 있을경우 results라는 key값이 있을경우...
        setnowPlayingData(nowResults);
        console.log(nowResults);
      } catch (error) {
        console.log("Error :" + error);
      }
    })();
  }, []);

  return (
    <div>
      <Banner data={nowPlayingData[0]} />
    </div>
  );
};
