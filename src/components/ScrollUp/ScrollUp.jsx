import { useEffect, useRef } from "react";

const ScrollUp = () => {
  const scroll = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let st = window.pageYOffset;
      if (st === 0) {
        scroll.current.style.opacity = 0;
        scroll.current.style.visibility = "hidden";
      }
      if (st > 0) {
        scroll.current.style.opacity = 1;
        scroll.current.style.visibility = "visible";
      }
    });
  }, []);

  const smoothScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={smoothScroll} ref={scroll} id="scrollUp">
      <i className="fa fa-angle-up"></i>
    </div>
  );
};

export default ScrollUp;
