import { Routes, Route, Link } from "react-router-dom";
import { SomeList } from "./pages/SomeList";
import { NavList } from "./components/NavList";
import { HomePage } from "./pages/HomePage";
import Nav from "./components/data/Nav";


import "./App.css";
import "./css/reset.css";
import "./css/header.css";

function App() {
  const nav = new Nav();

  return (
    <>
      <NavList items={nav.links} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/some-list" element={<SomeList />} />
      </Routes>
    </>
  );
}

export default App;
