import { MailOutlined } from '@ant-design/icons';
import styled from "@emotion/styled"

const MailIcon = styled(MailOutlined)`
  font-size: 50px;
`;

const index = () => {
  return (
    <>
      <div id="info">
        <div className="profile">
          <img src={process.env.PUBLIC_URL + "/image/myImg.png"} alt="profile"/>
        </div>
        <h1>최지윤</h1>
        <h2>프론트엔드 엔지니어</h2>
      </div>  
      <div>
        <div className="intro">
          <div className="info-content">
          </div>
        </div>
        <div className="AboutMe">
          <h3>ABOUT ME</h3>
          <div className="AboutMe-item">
            <div className="AboutMe-content">
              <p>안녕하세요, 고민하고 성장하는 걸 즐기는 프론트엔드 개발자 최지윤입니다.</p>
              <p>'만드는 사람도 즐겁고 사용하는 사람도 즐거운'을 모토로 개발합니다.</p>
              <p>피드백을 적극 수용하고 사용자 중심으로 생각하려고 노력합니다.</p>
              <p>작은 디테일과 섬세함으로 사용자 경험을 풍부하게 만들기 위해 끊임없이 고민합니다.</p>
            </div>
          </div>
        </div>
        
        <div className="Contact">
          <h3>CONTACT</h3>
          <div className="Contact-container">
            <div className="Contact-item">
              <MailIcon />
              <p>chlwldbs78@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;