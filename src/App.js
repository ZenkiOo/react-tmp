import { Routes, Route, Link } from 'react-router-dom';
import { SomeList } from './pages/SomeList';
import { HomePage } from './pages/HomePage';
import './App.css';

function App() {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <Link to={'/some-list'}>SomeList</Link>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/some-list' element={<SomeList />} />
      </Routes>
    </>
  );
}

export default App;
