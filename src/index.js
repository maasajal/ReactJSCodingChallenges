import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Components/Home';
import Exercise1 from './Components/Exercise1';
import Exercise2 from './Components/Exercise2';
import Exercise3 from './Components/Exercise3';
import Exercise4 from './Components/Exercise4';
import Exercise5 from './Components/Exercise5';
import Exercise6 from './Components/Exercise6';
import Exercise7 from './Components/Exercise7';
import Exercise8 from './Components/Exercise8';
import Exercise9 from './Components/Exercise9';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/exercise1" element={<Exercise1 />} />
              <Route path="/exercise2" element={<Exercise2 />} />
              <Route path="/exercise3" element={<Exercise3 />} />
              <Route path="/exercise4" element={<Exercise4 />} />
              <Route path="/exercise5" element={<Exercise5 />} />
              <Route path="/exercise6" element={<Exercise6 />} />
              <Route path="/exercise7" element={<Exercise7 />} />
              <Route path="/exercise8" element={<Exercise8 />} />
              <Route path="/exercise9" element={<Exercise9 />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
