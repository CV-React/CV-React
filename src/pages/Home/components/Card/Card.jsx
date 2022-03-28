import "./Card.scss";

const Card = ({ data, index }) => {
  const { degree, schoolName, time, desc, icon } = data;
  const isRight = () => {
    if (index % 2 === 0) return true;
    return false;
  };
  return (
    <div className={`timeline__block ${isRight() ? "flex-start" : "flex-end"}`}>
      <div className={`timeline__card animated`}>
        <div className={`timeline-circle animated `}>
          <span>{icon}</span>
        </div>
        <div className="card__degree">
          <h5>{degree}</h5>
        </div>
        <div className="card__school_name">
          <span>{schoolName}</span>
        </div>
        <div className="card__time">
          <span>{time}</span>
        </div>
        <div className="card__desc">
          <span>{desc}</span>
        </div>
        {data.extra && (
          <div className="card__more">
            <button type="button" onClick={() => alert("Hello")}>
              ...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
