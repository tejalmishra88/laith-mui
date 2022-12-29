
import './App.css';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
/*import TourCard from "./component/TourCard";
//import Paper from '@mui/material/Paper';//
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from './component/AppBar';
import cities from './data.json';
 import {Typography}  from '@mui/material';*/
 import Home from './pages/Home';
 import Tour from './pages/tour';
 import SearchAppBar from './component/AppBar';



function App() {
  

  return (
  <BrowserRouter>
  <SearchAppBar/>
  <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/:id" element={ <Tour/>}/>
  </Routes>
  </BrowserRouter>
  )
  
}

export default App
