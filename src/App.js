import { Home } from "pages";
import { useEffect, useState } from "react";
import Loading from "components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("section")) {
              entry.target.classList.add("animate");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll("div").forEach((div) => {
      observer.observe(div);
    });
  }, []);

  useEffect(() => {});

  return <div className="App">{loading ? <Loading /> : <Home />}</div>;
}

export default App;
