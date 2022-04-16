import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isVisible, setsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let st = window.pageYOffset;
      st === 0 ? setsVisible(false) : setsVisible(true);
    });
  }, []);

  const smoothScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={smoothScroll}
      id="scrollUp"
      style={
        !isVisible
          ? { opacity: 0, visibility: "hidden" }
          : { opacity: 1, visibility: "visible" }
      }
    >
      <i className="fa fa-angle-up"></i>
    </div>
  );
};

export default ScrollUp;
