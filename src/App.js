import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MoviePage from "./components/MoviePage";
import MainPage from "./components/MainPage";
import WishList from "./components/WishList";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/movie-app" exact element={<MainPage />} />
        <Route path="/movie-app/movie/:title" element={<MoviePage />} />
        <Route path="/movie-app/wish" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
