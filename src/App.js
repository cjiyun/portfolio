import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import index from "./Component/index";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Career from "./Component/Career";

import "./App.css";

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <header>
          <nav>
              <NavLink to={"/"} className="menu">최지윤</NavLink>
                <NavLink to={"skill"} className="menu">Skills</NavLink>
                <NavLink to={"project"} className="menu">Projects</NavLink>
                <NavLink to={"contest"} className="menu">Contests</NavLink>
                <NavLink to={"career"} className="menu">Career</NavLink>
          </nav>
        </header>

        <div>
          <main>
              <Routes>
                <Route path="/" Component={index} />
                <Route path="/skill" Component={Skill} />
                <Route path="/project" Component={Project} />
                <Route path="/contest" Component={Contest} />
                <Route path="/career" Component={Career} />
              </Routes>
            </main>
        </div>
        <footer>
          <i>
            Copyright 2023. 지은이 all rights reserved.
            <br />
            연락처 : 010-8906-3946
          </i>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
