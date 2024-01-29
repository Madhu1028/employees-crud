import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
