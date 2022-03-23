import React from "react";

const LinkItem = ({ value }) => {
  const { icon, data } = value;
  return (
    <div>
      <span>{icon}</span>
      <span>{data}</span>
    </div>
  );
};

export default LinkItem;
