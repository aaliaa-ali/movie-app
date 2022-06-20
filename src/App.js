import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import MoviePage from "./components/movie-details-page/MoviePage";
import MainPage from "./components/MainPage";
import WishList from "./components/WishList";
import Header from "./components/Header";
import { QueryClientProvider, QueryClient } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:title" element={<MoviePage />} />
          <Route path="/wish" element={<WishList />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
