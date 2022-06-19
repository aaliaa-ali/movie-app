import {  Routes, Route,HashRouter } from "react-router-dom";
import "./App.css";
import MoviePage from "./components/movie-details-page/MoviePage";
import MainPage from "./components/MainPage";
import WishList from "./components/WishList";
import Header from "./components/Header";

function App() {
  return (
     
    <HashRouter>
      <Header />
      <Routes>

        <Route path="/movie-app/" element={<MainPage />} />
        <Route path="/movie-app/movie/:title" element={<MoviePage />} />
        <Route path="/movie-app/wish" element={<WishList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
