import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { nowPlaying, popularMovie } from "../../api";
import { ShowMovie } from "./ShowMovie";

export const Home = () => {
  const [nowPlayingData, setnowPlayingData] = useState();
  const [popularData, setPopularData] = useState();
  const [isloading, setIsLoaing] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        //비구조화 할당을 사용하여 nowPlaying을 호출하여 있을경우 results라는 key값이 있을경우...
        setnowPlayingData(nowResults);
        // console.log(nowResults);

        const { results: popularResults } = await popularMovie();
        setPopularData(popularResults);
        console.log(popularResults);

        setIsLoaing(false);
      } catch (error) {
        console.log("Error :" + error);
      }
    })();
  }, []);

  return (
    <>
      {isloading ? ( // 조건1. loading이 참이라면 "loading"을 출력하고
        "now loading..."
      ) : (
        <div>
          <Banner data={nowPlayingData[0]} />
          <ShowMovie movieData={nowPlayingData} />
        </div>
      )}
    </>
  );
};
