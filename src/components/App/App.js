import "../../index.css";
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Edit from "../Edit/Edit";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { React, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import { getMovies } from "../../utils/MoviesApi.js";
import * as AuthApi from '../../utils/Auth.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]); // стейт для списка фильмов
  
  // прячем футер на страницах, где он не нужен
  const location = useLocation();
  const showFooterOnPages = ['/', '/movies', '/saved-movies'];
  const shouldShowFooter = showFooterOnPages.includes(location.pathname);

  const navigate = useNavigate();
  
  // обработчик авторизации
  function handleLogin(email, password) {
    AuthApi.login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setIsLoggedIn(true);
        }
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // обработчик регистрации
  function handleRegister(name, email, password) {
    AuthApi.register(name, email, password)
    .then((res) => {
      handleLogin(email, password);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // обработчик выхода
  function handleLogOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/');
  }

  // получение списка фильмов
  function getMoviesList() {
    getMovies()
      .then((res) => {
        setMovies(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // загрузка списка фильмов при первом рендере в авторризованном состоянии
  useEffect ((isLoggedIn) => {
    getMoviesList();
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header />
        <Routes>
          {/* закоммитила, чтобы удобнее было сначала разобраться*/}
          <Route path="/movies" element={<Movies movies={movies} />} />
          {/* <Route path="/movies" element={<ProtectedRoute
          element={Movies}
          loggedIn={isLoggedIn}
          />} />
          <Route path="/movies" element={isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/signin" replace />} /> */}
          {/* закоммитила, чтобы удобнее было сначала разобраться*/}
          <Route path="/saved-movies" element={<SavedMovies/>} />
          {/* <Route path="/saved-movies" element={<ProtectedRoute
          element={SavedMovies}
          loggedIn={isLoggedIn}
          />} />
          <Route path="/saved-movies" element={isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/signin" replace />} /> */}
          
          <Route path="/profile" element={<ProtectedRoute
          element={Profile}
          // loggedIn={isLoggedIn}
          />} />
          <Route path="/profile" element={isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/signin" replace />} />
          
          {/* скорее всего ненужная часть кода */}
          {/* <Route path="/profile" element={<ProtectedRoute
          element={Edit}
          loggedIn={isLoggedIn}
          />} />
          <Route path="/edit" element={isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/signin" replace />} /> */}

          {/* <Route path="/movies" element={<Movies/>} /> */}
          {/* <Route path="/saved-movies" element={<SavedMovies/>}/> */}
          {/* <Route path="/profile" element={<Profile/>}/> */}
          {/* <Route path="/edit" element={<Edit/>}/> */}
          <Route path="/" element={<Main/>} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Register handleRegister={handleRegister} />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
        {shouldShowFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
