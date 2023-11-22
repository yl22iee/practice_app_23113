import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* padding: 80px 30px; */
  margin-bottom: 80px;
  a {
    color: white;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CoverBg = styled.div`
  height: 300px;
  background-color: lightgray;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const MovieTitle = styled.div`
  font-size: 18px;
`;

const params = {
  spaceBetween: 15,
  slidesPerView: 6.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.3,
    },
  },
};

// export const ShowMovie = ({ moviedata }) => {
//   return (
//     <div>
//       <Container>
//         <Title>인기영화</Title>

//         <Swiper {...params}>
//           <SwiperSlide>
//             <CoverBg />
//             <MovieTitle>Hhello</MovieTitle>
//           </SwiperSlide>
//         </Swiper>
//       </Container>
//     </div>
//   );
// };

export const ShowMovie = ({ moviedata }) => {
  return (
    <div>
      <Container>
        <Title>HelloWorld</Title>
        {/* Title을 매개변수로 해둘것 */}

        <Swiper {...params}>
          {moviedata.map((mapdata) => (
            <SwiperSlide key={mapdata.id}>
              <Link to={`/detail/${mapdata.id}`}>
                <CoverBg $bgUrl={mapdata.poster_path} />
                <MovieTitle>{mapdata.title}</MovieTitle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
