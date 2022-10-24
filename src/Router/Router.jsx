import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import Login from '../Pages/Login';
import Recipe from '../Pages/Recipe';
import Error404 from '../Pages/Error404';
import AppNavbar from '../Components/AppNavbar';
import Detail from '../Pages/Detail';

const Router = ({ isAuth, setIsAuth }) => {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Recipe {...{ isAuth }} />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login {...{ setIsAuth }} />} />
        <Route path="detail" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
