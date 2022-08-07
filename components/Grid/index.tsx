// COMPONENTS
import Card from "../Card";

// STYLES
import { Container, Title, GridContainer } from "./styles";

const Grid = function () {
  return (
    <Container>
      <Title>FILMES QUE VEM POR AÍ...</Title>
      <GridContainer>
        <Card />
      </GridContainer>
    </Container>
  );
};

export default Grid;
