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
  NoOverview,
} from "./styles";

// TYPES
type CardProps = {
  title: string;
  rate: string;
  release: Date;
  overview: string;
  poster: string;
};

const Card = function ({ title, rate, release, overview, poster }: CardProps) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [toggleText, setToggleText] = useState("Abrir sinopse");

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
    setToggleText(isCardOpen ? "Abrir sinopse" : "Fechar sinopse");
  };

  const renderReleaseDate = () => {
    if (
      Object.prototype.toString.call(release) === "[object Date]" &&
      release.getTime()
    ) {
      return `Data de Lançamento: ${format(release, "dd/MM/yyyy")}`;
    }

    return "Não há data de lançamento";
  };

  const renderPostPath = () => {
    if (poster) {
      return `https://image.tmdb.org/t/p/w500${poster}`;
    }

    return "/default-poster.png";
  };

  return (
    <Container>
      <Movie>
        <Poster>
          <img src={renderPostPath()} alt="movie logo" />
        </Poster>

        <MovieInfo>
          <Title>{title}</Title>

          <Rate>
            <Star />
            <p>{rate ? rate : "Não avaliado"}</p>
          </Rate>

          <Release>{renderReleaseDate()}</Release>

          {overview && (
            <ToggleOverview isCardOpen={isCardOpen} onClick={toggleCard}>
              <ArrowDown />
              {toggleText}
            </ToggleOverview>
          )}

          {!overview && <NoOverview>Sinopse não disponível</NoOverview>}
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
