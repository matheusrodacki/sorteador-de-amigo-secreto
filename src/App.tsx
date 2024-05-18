import { RecoilRoot } from 'recoil';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Configuracao from './pages/Configuracao/Configuracao';
import Sorteio from './pages/Sorteio/Sorteio';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />} />
          <Route path='/sorteio' element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
