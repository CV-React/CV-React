const SkillBar = ({ data }) => {
  return (
    <div className="skillBar">
      <div className="skillBar__title">{data.title}</div>
      <div className="skillBar_process">
        <div style={{ width: `${data.percent}%` }}></div>
      </div>
      <div className="skillBar_percent">{data.percent}%</div>
    </div>
  );
};

export default SkillBar;
