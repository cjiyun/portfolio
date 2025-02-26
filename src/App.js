import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import index from "./Component/index";
import Skill from "./Component/Skill";
import Sidebar from './Component/Sidebar';
import Contest1 from './Component/Contest/Contest1';
import Contest2 from './Component/Contest/Contest2';
import Contest3 from './Component/Contest/Contest3';
import Career1 from './Component/Career/Career1';
import Career2 from './Component/Career/Career2';
import Career3 from './Component/Career/Career3';
import Project1 from './Component/Project/Project1';
import Project2 from './Component/Project/Project2';
import Project3 from './Component/Project/Project3';
import Project4 from './Component/Project/Project4';
import Login from './Component/Login';
import "./App.css";
import ProtectedRoute from './Component/ProtectedRoute';

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Sidebar/>
        <div className="main-container">
          <main>
            <div className="main-content">
              <Routes>
                <Route path="/portfolio" Component={index} />
                <Route path="/skill" Component={Skill} />
                <Route path="/contest/contest1" Component={Contest1} />
                <Route path="/career/career1" Component={Career1} />
                <Route path="/career/career2" Component={Career2} />
                <Route path="/career/career3" Component={Career3} />
                <Route path="/project/project1" element={
                  <ProtectedRoute>
                    <Project1 />
                  </ProtectedRoute>
                } />
                <Route path="/project/project2" element={
                  <ProtectedRoute>
                    <Project2 />
                  </ProtectedRoute>
                } />
                <Route path="/auth/login" Component={Login} />
              </Routes>
            </div>
          </main>
        </div>
        <footer>
          <i>
            Copyright 2024. 최지윤 all rights reserved.
            <br />
            연락처 : 010-4168-5472
          </i>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;