import "../CSS/Project.css";

const Project2 = () => {
  return (
    <div className="project-portfolio">
      <h1 className="project-title">#</h1>
      <img className="project-img" src={process.env.PUBLIC_URL + "/image/#"} alt="Project Main Image" />
      <div className="project-item">
        <h3>개요</h3>
        <div className="project-content">
          <p></p>
        </div>
      </div>

      <div className="project-item">
        <h3>주요 기능</h3>
        <div className="project-content">
          <ul>
          </ul>
        </div>
      </div>

      <div className="project-item">
        <h3>사용된 기술</h3>
        <div className="project-content">
          <ul>
          </ul>
        </div>
      </div>      
    </div>
  );
};

export default Project2;