import { Routes, Route, Link } from 'react-router-dom';
import { SomeList } from './pages/SomeList';
import { HomePage } from './pages/HomePage';

import './App.css';
import './css/reset.css';
import './css/header.css';

function App() {
  return (
    <>
      <div className='nav-links'>
        <Link className='nav-links__link' to={'/'}>
          Home
        </Link>
        <Link className='nav-links__link' to={'/some-list'}>
          SomeList
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/some-list' element={<SomeList />} />
      </Routes>
    </>
  );
}

export default App;
