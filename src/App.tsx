import { RecoilRoot } from 'recoil';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Formulario} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
