import React from 'react';
import {Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contacts from './components/Contacts/Contacts';
import Photos from './components/Photos/Photos';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/main'} element={<Main />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/contacts'} element={<Contacts />} />
        <Route path={'/photos'} element={<Photos />} />
      </Routes>
    </div>
  );
}

