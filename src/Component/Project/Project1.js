import "../CSS/Project.css";

const Project1 = () => {
  return (
    <div className="project-portfolio">
      <h1 className="project-title">React를 이용한 포트폴리오 제작</h1>
      <img className="project-img" src={process.env.PUBLIC_URL + "/image/portfolio-intro.png"} alt="react" />
      <div className="project-item">
        <h3>개요</h3>
        <div className="project-content">
          <p>차별화된 나만의 포트폴리오로 저라는 사람을 표현하고 싶어서 제작했습니다. 
            깔끔한 디자인을 위해 모노톤 색상을 사용했습니다. 
            공부하고 배우면서 포토폴리오를 제작하는 것이기 때문에 지속적으로 개선해 나갈 예정입니다.</p>
        </div>
      </div>

      <div className="project-item">
        <h3>주요 기능</h3>
        <div className="project-content">
          <ul>
            <li>사이드바를 이용한 home, skills, projects, contests, career 메뉴</li>
            <li>서브 메뉴를 클릭하면 페이지가 동적으로 전환되도록 설계</li>
            <li>화면 크기에 따른 반응형 웹</li>
          </ul>
        </div>
      </div>

      <div className="project-item">
        <h3>사용된 기술</h3>
        <div className="project-content">
          <ul>
            <li>React</li>
            <li>Ant-Design</li>
            <li>Emotion</li>
          </ul>
        </div>
      </div>      
    </div>
  );
};

export default Project1;
