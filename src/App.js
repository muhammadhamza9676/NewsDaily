import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  const [progress, setProgress] = useState(0);
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" key="general" element={<News setProgress={setProgress} country="us" pageSize={12} category="general" />} />
          <Route exact path="/technology" key="technology" element={<News setProgress={setProgress} key="technology" country="us" pageSize={12} category="technology" />} />
          <Route exact path="/business" key="business" element={<News setProgress={setProgress} key="business" country="us" pageSize={12} category="business" />} />
          <Route exact path="/entertainment" key="entertainment" element={<News setProgress={setProgress} key="entertainment" country="us" pageSize={12} category="entertainment" />} />
          <Route exact path="/general" key="general" element={<News setProgress={setProgress} key="general" country="us" pageSize={12} category="general" />} />
          <Route exact path="/health" key="health" element={<News setProgress={setProgress} key="health" country="us" pageSize={12} category="health" />} />
          <Route exact path="/science" key="science" element={<News setProgress={setProgress} key="science" country="us" pageSize={12} category="science" />} />
          <Route exact path="/sports" key="sports" element={<News setProgress={setProgress} key="sports" country="us" pageSize={12} category="sports" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
