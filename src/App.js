import logo from "./logo.svg";
import "./App.scss";
import { Home } from "pages";
import { useEffect, useState } from "react";
import Loading from "components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <div className="App">{loading ? <Loading /> : <Home />}</div>;
}

export default App;
