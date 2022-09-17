import './App.css';
import Header from './component/Header/Header';
import SimpleBottomNavigation from './component/MainNav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from './Pages/Trending/Trending';
import Series from './Pages/Series/Series';
import Movie from './Pages/Movies/Movie';
import Search from './Pages/Search/Search';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        
          <Routes>
            <Route path="/" element={<Trending/>}/>
          
            <Route path="/series" element={<Series/>}/>
         
            <Route path="/movie" element={<Movie/>}/>
          
            <Route path="/search" element={<Search/>}/>
          </Routes>
        
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
