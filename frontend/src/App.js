import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import HomePage from './pages/homePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>


          <Route path='/' element={<HomePage />}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
