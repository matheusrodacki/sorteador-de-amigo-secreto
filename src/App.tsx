import { RecoilRoot } from 'recoil';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Configuracao from './pages/Configuracao/Configuracao';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
