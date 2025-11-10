import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage.jsx'
import './App.css'



function App() {
 
  return (
      <>
          <Router>
              {/* 2. التغيير هنا: Switch بقت Routes */}
              <Routes>
                  {/* 3. التغيير هنا: component بقت element ولازم الأقواس */}
                  <Route path="/portfolio/" element={<MyPage />} />
              </Routes>
          </Router>
      </>
  );
}

export default App
