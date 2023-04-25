import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
