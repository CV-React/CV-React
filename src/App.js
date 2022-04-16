import Loading from "components/Loading/Loading";
import { Home } from "views/pages";
import { useEffect, useState } from "react";
function App() {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    var load = setTimeout(() => {
      setIsLoad(true);
    }, 2000);

    return () => {
      clearTimeout(load);
    };
  }, []);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("animated")) {
              if (entry.target.classList.contains("animateBanner")) {
                entry.target.classList.add("fadeBanner");
              } else {
                entry.target.classList.add("fade");
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".animated").forEach((ele) => {
      observer.observe(ele);
    });
  }, []);

  return (
    <>
      <Loading style={!isLoad ? { display: "block" } : { display: "none" }} />
      <div className="App" style={isLoad ? { display: "block" } : {}}>
        <Home />
      </div>
    </>
  );
}

export default App;
