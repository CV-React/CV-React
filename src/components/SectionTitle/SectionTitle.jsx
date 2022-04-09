import "./SectionTitle.scss";

const SectionTitle = ({ title, icon }) => {
  return (
    <div className="section__title">
      <h4 className="text__uppercase text__center">
        <img className="animated" src={icon} alt="demo" />
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;
