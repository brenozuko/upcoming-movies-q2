import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { toast } from "react-toastify";
import axios from "axios";

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import SearchModal from "../components/SearchModal";

// STYLES
import { Container, ReactPaginateStyled } from "../config/GlobalStyle";
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
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handlePageChange = async (event: any) => {
    try {
      setLoading(true);
      const { selected } = event;
      const data = await onFetchMovies(selected + 1);

      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (e) {
      console.log(e);
      toast.error("Não foi possível recuperar os filmes...");
    } finally {
      setLoading(false);
    }
  };

  const onOpenSearch = () => {
    setSearchModalOpen(true);
  };

  const onCloseSearch = () => {
    setSearchModalOpen(false);
  };

  useEffect(() => {
    setMovies(moviesResults?.results);
    setTotalPages(moviesResults?.total_pages);
  }, [moviesResults]);

  return (
    <>
      <Header openSearch={onOpenSearch} />

      <Container>
        <Grid movies={movies} loading={loading} />

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

      {searchModalOpen && <SearchModal closeSearch={onCloseSearch} />}
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
