import "./Card.scss";
import "../../Home.scss";
import Modal from "components/Popup/Modal";

const Card = ({ data }) => {
  const { degree, schoolName, time, desc, icon } = data;

  return (
    <div className="timeline__block">
      <div className="timeline__dot animated">
        <h6>{icon}</h6>
      </div>
      <div className="timeline__content animated card">
        <div className="card__content">
          <h6 className="timeline__title">{degree}</h6>
          <div className="timeline__info">
            <h6>
              <small>{schoolName}</small>
            </h6>
            <h6>
              <small>{time}</small>
            </h6>
          </div>
          <p>{desc}</p>
          {data.extra && (
            <div className="card__more">
              <Modal data={data.extra} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
