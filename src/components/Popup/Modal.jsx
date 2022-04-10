import Popup from "reactjs-popup";
import "./Modal.scss";

const Modal = ({ data }) => {
  const { title, time, img, desc } = data[0];
  console.log(data);
  return (
    <Popup
      trigger={<button type="button">...</button>}
      modal
      position={"top center"}
      closeOnDocumentClick
    >
      {(close) => (
        <div className="modal">
          <span className="close" onClick={close}>
            <i class="fa fa-close"></i>
          </span>
          <div className="header text__center">
            <h4>{title}</h4>
            <h6>{time}</h6>
          </div>
          <div className="content">
            <img src={img} alt="popup" className="image__responsive" />
            <p>{desc}</p>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Modal;
