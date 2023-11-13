import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { nowPlaing, nowPlaying } from "../../api";

const Wrap = styled.div`
  height: 100vh;
  padding: 400px 10%;
  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [loading, setLoaing] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying(); // 비구조화 할당
        setNowPlayingData(results); // 지역함수의 변수를 외부에서 사용하기 위해 변수에 담았음
        setLoaing(false);
        // console.log(results[1].title);
      } catch (error) {
        console.log("에러" + error);
      } // try, catch는 예외처리를 하기 위해서 만들어줬음
    })();
  }, []);

  console.log(loading);
  console.log(nowPlayingData);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <Wrap>
              <Title>
                <h3>{nowPlayingData[0].title}</h3>
              </Title>

              <p>{nowPlayingData[0].overview}</p>
            </Wrap>
          )}
        </div>
      )}
    </>
  );
};
