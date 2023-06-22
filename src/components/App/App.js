import "../../index.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
// import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />}/>
        <Route path="/signin" element={<Login />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/404" element={<NotFound />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
