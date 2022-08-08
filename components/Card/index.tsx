/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { format } from "date-fns";

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

// TYPES
type CardProps = {
  title: string;
  rate: string;
  release: string;
  overview: string;
  poster: string;
};

const Card = function ({ title, rate, release, overview, poster }: CardProps) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [toggleText, setToggleText] = useState("Abrir sinopse");

  const toggleCard = function () {
    setIsCardOpen(!isCardOpen);
    setToggleText(isCardOpen ? "Abrir sinopse" : "Fechar sinopse");
  };

  return (
    <Container>
      <Movie>
        <Poster>
          <img src={`https://image.tmdb.org/t/p/w185/${poster}`} alt="logo" />
        </Poster>

        <MovieInfo>
          <Title>{title}</Title>

          <Rate>
            <Star />
            <p>{rate}</p>
          </Rate>

          <Release>{`Data de Lançamento: ${format(
            new Date(release),
            "dd/MM/yyyy"
          )}`}</Release>

          <ToggleOverview isCardOpen={isCardOpen} onClick={toggleCard}>
            <ArrowDown />
            {toggleText}
          </ToggleOverview>
        </MovieInfo>
      </Movie>
      <Overview isCardOpen={isCardOpen}>
        <h2>Sinopse: </h2>
        <p>{overview}</p>
      </Overview>
    </Container>
  );
};

export default Card;
