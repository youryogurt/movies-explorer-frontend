import "../../index.css";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { React, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import { getMovies } from "../../utils/MoviesApi.js";
import * as AuthApi from "../../utils/Auth.js";
import api from "../../utils/MainApi.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]); // стейт для списка фильмов
  const [savedMovies, setSavedMovies] = useState([]); // стейт для сохраненных фильмов
  const [userRequestDone, setUserRequestDone] = useState(true);

  // прячем футер на страницах, где он не нужен
  const location = useLocation();
  const showFooterOnPages = ["/", "/movies", "/saved-movies"];
  const shouldShowFooter = showFooterOnPages.includes(location.pathname);

  const navigate = useNavigate();

  // получение данных пользователя
  function getMainData() {
    Promise.all([api.getUserInfo(), api.getSavedMovies()])
      .then(([currentUser, savedMovies]) => {
        setCurrentUser(currentUser);
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // обработчик авторизации
  function handleLogin(email, password) {
    AuthApi.login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          getMainData(); // получаем данные пользователя
        }
        navigate("/movies");
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
    console.log(name, email, password);
  }

  // проверка токена
  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    AuthApi.getContent(jwt)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserRequestDone(true);
      });
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  // обработчик выхода
  function handleLogOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/");
  }

  // обработчик обновления данных пользователя
  function handleUpdateUser(name, email) {
    const updatedUser = { name, email };
    api
      .setUserInfo(updatedUser)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
  useEffect(
    (loggedIn) => {
      getMoviesList();
    },
    [loggedIn]
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                movies={movies}
                loggedIn={loggedIn}
                userRequestDone={userRequestDone}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                userRequestDone={userRequestDone}
                savedMovies={savedMovies}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                handleLogOut={handleLogOut}
                handleUpdateUser={handleUpdateUser}
                userRequestDone={userRequestDone}
                currentUser={currentUser}
              />
            }
          />

          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />

          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        {shouldShowFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
