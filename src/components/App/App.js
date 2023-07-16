import "../../index.css";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import SimpleHeader from "../SimpleHeader/SimpleHeader";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Edit from "../Edit/Edit";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<><Header/> <Main/> <Footer/></>} />
        <Route path="/movies" element={<><Header/> <Movies/> <Footer/></>} />
        <Route path="/saved-movies" element={<><Header/> <SavedMovies/> <Footer/></>}/>
        <Route path="/signin" element={<><SimpleHeader/> <Login/> </>}/>
        <Route path="/signup" element={<><SimpleHeader/> <Register/> </>}/>
        <Route path="/profile" element={<><Header/> <Profile/> </>}/>
        <Route path="/edit" element={<><SimpleHeader/> <Edit/> </>}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
