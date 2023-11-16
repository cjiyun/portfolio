const index = () => {
  return (
    <>
      <div id="index">
        <h1>최지윤</h1>
        <h2>프론트엔드 엔지니어</h2>
      </div>  
      <div>
        <div class="info">
          <div class="info-content">
          </div>
        </div>
        <div class="AboutMe">
          <h3>About Me</h3>
          <div className="AboutMe-content">
            <img class="info-profile" src="/image/myImg.png" alt="profile"/>
            <div class="intro">
              <p>안녕하세요, 프론트엔드 개발자 최지윤이라고 합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;