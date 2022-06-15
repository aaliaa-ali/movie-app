import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MoviesContainer from "./components/MoviesContainer";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/movie-app" exact element={<MoviesContainer />} />
        <Route path="/movie/:title" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
