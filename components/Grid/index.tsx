// COMPONENTS
import Card from "../Card";

// STYLES
import { Container, Title, GridContainer } from "./styles";

type GridProps = {
  movies: any;
};
const Grid = function ({ movies }: GridProps) {
  const renderMovieCards = () => {
    return movies.map((movie: any) => {
      return (
        <Card
          key={movie.id}
          title={movie.title}
          rate={movie.vote_average}
          release={movie.release_date}
          overview={movie.overview}
          poster={movie.poster_path}
        />
      );
    });
  };

  return (
    <Container>
      <Title>FILMES QUE VEM POR AÍ...</Title>
      <GridContainer>{renderMovieCards()}</GridContainer>
    </Container>
  );
};

export default Grid;
