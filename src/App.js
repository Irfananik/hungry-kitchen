import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Form/Login/Login';
import SignUp from './Pages/Form/SignUp/SignUp';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
