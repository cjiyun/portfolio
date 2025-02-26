import "./CSS/Skill.css";

function Skill() {
  return (
    <div className="skill">
      <h1>Skills</h1>
      <div className="frontend-container">
        <div className="header">frontend</div>
        <div className="skill-details">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Kotlin</li>
          </ul>
        </div>
      </div>
      <div className="backend-container">
        <div className="header">backend</div>
        <div className="skill-details">
          <ul>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;
