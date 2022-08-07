import Image from "next/image";

// STYLES
import { Container, Movie, Overview, MovieInfo } from "./styles";

const Card = function () {
  return (
    <Container>
      <Movie>
        <Image src="/mock-movie.jpg" alt="logo" width={115} height={153} />

        <MovieInfo></MovieInfo>
      </Movie>
      <Overview></Overview>
    </Container>
  );
};

export default Card;
