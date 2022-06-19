import {  Routes, Route,HashRouter } from "react-router-dom";
import "./App.css";
import MoviePage from "./components/movie-details-page/MoviePage";
import MainPage from "./components/MainPage";
import WishList from "./components/WishList";
import Header from "./components/Header";

function App() {
  return (
     
    <HashRouter basename="/movie-app" >
      <Header />
      <Routes>
        <Route path="/" exact  element={<MainPage />} />
        <Route path="/movie/:title" element={<MoviePage />} />
        <Route path="/wish" element={<WishList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
