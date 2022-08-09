import { useState } from "react";

// COMPONENTS
import Card from "../Card";
import { TailSpin } from "react-loader-spinner";

// STYLES
import { Container, Title, GridContainer } from "./styles";

type GridProps = {
  movies: any;
  loading: boolean;
};

const Grid = function ({ movies, loading }: GridProps) {
  const renderMovieCards = () => {
    return movies.map((movie: any) => {
      return (
        <Card
          key={movie.id}
          title={movie.title}
          rate={movie.vote_average}
          release={new Date(movie.release_date)}
          overview={movie.overview}
          poster={movie.poster_path}
        />
      );
    });
  };

  if (loading) {
    return (
      <TailSpin
        height="80"
        width="80"
        color="#7fa8fc"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{ height: "100vh" }}
        visible={true}
      />
    );
  } else {
    return (
      <Container>
        <Title>FILMES QUE VEM POR AÍ...</Title>
        <GridContainer>{renderMovieCards()}</GridContainer>

        {!movies && <Title>Nenhum filme encontrado</Title>}
      </Container>
    );
  }
};

export default Grid;
