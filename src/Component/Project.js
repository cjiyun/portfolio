import { useState } from "react";
import projects from "./Data/projects";
import "./CSS/Project.css";
import Login from "./Login";

function Project() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  const [id, SetId] = useState("");
  const [pwd, SetPwd] = useState("");
  const changeId = (e) => {
    SetId(e.target.value);
  };
  const changePwd = (e) => {
    SetPwd(e.target.value);
  };
  if (id === "zyoon" && pwd === "1001") {
    return (
      <div id="project">
        {projects.map((project, index) => (
          <button onClick={contentChange} value={index}>
            {project.tab}
          </button>
        ))}
  
        {projects[index].content}
      </div>
    );
  } else
  return (
    <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} />
  );
}

export default Project;