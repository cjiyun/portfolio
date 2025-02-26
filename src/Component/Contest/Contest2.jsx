import "../CSS/Contest.css";

const Contest2 = () => {
  return (
    <div className="contest">
      <h1 className="contest-title">#</h1>
      <div className="contest-container">
        <img className="contest-img" src={process.env.PUBLIC_URL + "/image/#"} alt="Contest Poster" />
        <div className="contest-item">
          <div className="contest-content">
            <ul>
              <li>수상 : </li>
              <li>주최 기관 : </li>
              <li>주제 : </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest2;
