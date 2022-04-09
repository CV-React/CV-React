import Loading from "components/Loading/Loading";
import { Home } from "pages";
import { useEffect, useRef } from "react";
function App() {
  const content = useRef();

  useEffect(() => {
    setTimeout(() => {
      content.current.style.display = "block";
    }, 2000);

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

  useEffect(() => {});

  return (
    <>
      <Loading />
      <div ref={content} className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
