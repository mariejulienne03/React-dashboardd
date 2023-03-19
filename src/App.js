import React from 'react';
import './App.css';
import DashboardCosmetique from "./Pages/DashboardCosmetique/DashboardCosmetique";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContextProvider from './context/DashboardContext';

export default function App() {
  return (
  <DashboardContextProvider>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<DashboardCosmetique />}/>
      </Routes>
    </BrowserRouter>
    </DashboardContextProvider>
  );
}
