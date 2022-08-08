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
import "react-toastify/dist/ReactToastify.css";

// TYPES
type HomeProps = {
  moviesResults: any;
};

const fetchMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1"
    );

    return data.results;
  } catch (e) {
    console.log(e);
    toast.error("Erro ao buscar os filmes.");
  }
};

const Home: NextPage<HomeProps> = ({ moviesResults }) => {
  const [movies, setMovies] = useState([]);

  const handleChangePage = async (page: number) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=${page}`
      );

      setMovies(data.results);
    } catch (e) {
      console.log(e);
      toast.error("Erro ao buscar os filmes.");
    }
  };

  useEffect(() => {
    setMovies(moviesResults);
  }, [moviesResults]);

  return (
    <>
      <Header />

      <Container>
        <Grid movies={movies} />
      </Container>

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchMovies();

  return {
    props: {
      moviesResults: data,
    },
  };
};

export default Home;
