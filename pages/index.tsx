import type { NextPage } from "next";

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
// STYLES
import { Container } from "../config/GlobalStyle";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Container>
        <Grid />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
