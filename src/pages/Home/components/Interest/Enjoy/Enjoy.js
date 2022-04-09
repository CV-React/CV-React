const Enjoy = ({ data, bgColor, color }) => {
  const { icon, name } = data;
  return (
    <div className="enjoy__item">
      <i className={icon}></i>
      <span>{name}</span>
    </div>
  );
};

export default Enjoy;
