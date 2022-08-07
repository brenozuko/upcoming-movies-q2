/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

// ICONS
import Star from "./icons/star-icon.svg";
import ArrowDown from "./icons/arrow-down-icon.svg";

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
  ToggleOverview,
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
            <p>7.8</p>
          </Rate>

          <Release>Data de Lançamento: 29/05/2022</Release>

          <ToggleOverview></ToggleOverview>
        </MovieInfo>
      </Movie>
      <Overview>
        <h2>Sinopse: </h2>
        <p>
          Desde criança, Georgia Nolan só tinha um sonho: se tornar bombeira,
          como seu pai. Infelizmente, no ano de 1932 em Nova York, as mulheres
          não podiam atuar nessa profissão. Quando os bombeiros da cidade
          desapareceram um a um misteriosamente em incêndio que queimou o teatro
          da Broadway, Georgia viu a grande chance! Ela disfarçou-se de “Joe”,
          um homem magro e esquisito, e entrou para o time improvisado de
          bombeiros que tem a missão de acabar com o incêndio e solucionar o
          mistério. Georgia precisa manter sua falsa identidade a qualquer
          custo, especialmente porque é seu pai quem está no comando dessa
          operação.
        </p>
      </Overview>
    </Container>
  );
};

export default Card;
