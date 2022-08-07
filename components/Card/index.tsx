/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

// ICONS
import Star from "./icons/star-icon.svg";

// STYLES
import {
  Container,
  Movie,
  Overview,
  MovieInfo,
  Poster,
  Title,
  Rate,
  Release,
} from "./styles";

const Card = function () {
  return (
    <Container>
      <Movie>
        <Poster>
          <img src="/mock-movie.jpg" alt="logo" />
        </Poster>

        <MovieInfo>
          <Title>The Post: A Guerra Secreta</Title>

          <Rate>
            <Star />
          </Rate>

          <Release></Release>
        </MovieInfo>
      </Movie>
      <Overview></Overview>
    </Container>
  );
};

export default Card;
