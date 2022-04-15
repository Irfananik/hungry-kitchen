import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Form/Login/Login';
import SignUp from './Pages/Form/SignUp/SignUp';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Breakfast from './Pages/Home/Product/Breakfast/Breakfast';
import Lunch from './Pages/Home/Product/Lunch/Lunch';
import Dinner from './Pages/Home/Product/Dinner/Dinner';
import About from './Pages/Home/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Home/>
      <Routes>
        <Route path="/breakfast" element={<Breakfast/>}></Route>
        <Route path="/breakfast" element={<Breakfast/>}></Route>
        <Route path="/dinner" element={<Dinner/>}></Route>
        <Route path="/lunch" element={<Lunch/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      <About/>
    </div>
  );
}

export default App;
