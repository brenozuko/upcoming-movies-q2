import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// ICONS
import Glass from "./icons/glass.svg";
import CloseIcon from "./icons/close-icon.svg";

// COMPONENTS
import Card from "../Card";
import { DebounceInput } from "react-debounce-input";

// STYLES
import {
  Container,
  Overlay,
  Title,
  SearchBar,
  CloseContainer,
  GridContainer,
} from "./styles";
import { ReactPaginateStyled } from "../../config/GlobalStyle";

type SearchModalProps = {
  closeSearch: () => void;
};

type onSearchProps = {
  query: string;
  page: number;
};

const SearchModal = function ({ closeSearch }: SearchModalProps) {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");

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

  const onSearch = async ({ query, page }: onSearchProps) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&query=${query}&page=${page}&include_adult=false`
      );

      return data || [];
    } catch (e) {
      console.log(e);
      toast.error("Não foi possível recuperar os filmes...");
    }
  };

  const handlePageChange = async (event: any) => {
    try {
      const { selected } = event;
      const data = await onSearch({ query, page: selected + 1 });

      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (e) {
      console.log(e);
      toast.error("Não foi possível recuperar os filmes...");
    }
  };

  const handleSearch = async (event: any) => {
    try {
      const data = await onSearch({ query: event.target.value, page: 1 });

      setMovies(data?.results);
      setTotalPages(data?.total_pages);
      setQuery(event.target.value);
    } catch (e) {
      console.log(e);
      toast.error("Não foi possível recuperar os filmes...");
    }
  };

  return (
    <>
      <Container>
        <Title>BUSQUE UM FILME</Title>

        <CloseContainer onClick={closeSearch}>
          <CloseIcon />
        </CloseContainer>

        <SearchBar>
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            onChange={(event) => handleSearch(event)}
            placeholder="Buscar... "
            type="text"
          />

          <Glass />
        </SearchBar>

        {movies?.length > 0 && (
          <GridContainer>{renderMovieCards()}</GridContainer>
        )}

        {movies?.length === 0 && (
          <Title style={{ minHeight: 400, marginTop: 60 }}>
            Filmes não encontrados...{" "}
          </Title>
        )}

        <ReactPaginateStyled
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageChange}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="<"
        />
      </Container>
      <Overlay onClick={closeSearch} />
    </>
  );
};

export default SearchModal;
