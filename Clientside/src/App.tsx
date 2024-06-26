// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/Dashboard';
import NavigationBar from './Components/NavigationBar';


const App: React.FC = () => {
  return (
    <Router>
    
        
        <Routes>
        <Route  path="/" element={<NavigationBar/>} />
          <Route  path="/dashboard" element={<DashboardPage/>} />
        </Routes>
     
    </Router>
  );
};

export default App;
