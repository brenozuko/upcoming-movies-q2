import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { toast } from "react-toastify";
import axios from "axios";

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../components/Grid";

// STYLES
import { Container } from "../config/GlobalStyle";
import { ReactPaginateStyled } from "../styles/Home";
import "react-toastify/dist/ReactToastify.css";

// TYPES
type HomeProps = {
  moviesResults: any;
};

async function onFetchMovies(page: number) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=${page}`
    );

    return data;
  } catch (e) {
    console.log(e);
    toast.error("Não foi possível recuperar os filmes...");
  }
}

const Home: NextPage<HomeProps> = ({ moviesResults }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = async (event: any) => {
    const { selected } = event;
    setPage(selected + 1);
    const data = await onFetchMovies(selected + 1);

    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    setMovies(moviesResults.results);
    setTotalPages(moviesResults.total_pages);
  }, [moviesResults]);

  return (
    <>
      <Header />

      <Container>
        <Grid movies={movies} />

        <ReactPaginateStyled
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageChange}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="<"
        />
      </Container>

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const moviesResults = await onFetchMovies(1);

  return {
    props: {
      moviesResults,
    },
  };
};

export default Home;
