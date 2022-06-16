import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MoviesContainer from "./components/MoviesContainer";
import MoviePage from "./components/MoviePage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/movie-app" exact element={<MainPage />} />
        <Route path="/movie-app/movie/:title" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
