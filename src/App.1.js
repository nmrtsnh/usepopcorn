import { useState } from "react";
import { Fragment } from "react";
import {
  tempMovieData,
  tempWatchedData,
  NavBar,
  Search,
  NumResults,
  Main,
  Box,
  MovieList,
  WatchedSummary,
  WatchedMoviesList,
} from "./App";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <Fragment>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <Fragment>
            // <WatchedSummary watched={watched} />
            // <WatchedMoviesList watched={watched} />
          </Fragment>
        </Box>
      </Main>
    </Fragment>
  );
}
