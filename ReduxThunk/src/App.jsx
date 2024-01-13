import { useState } from "react";
import "./App.css";
import actionProvider from "./components/Action";
import store from "./components/Store";

function App() {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  store.subscribe(() => {
    setData(store.getState().data.data);
    setIsDataFetched(true);
  });
  const cleardata = () => {
    setData([]);
    setIsDataFetched(false);
  };
  return (
    <>
      <button onClick={() => store.dispatch(actionProvider())}>
        Fetch Data
      </button>
      {isDataFetched && (
        <button id="btn" onClick={cleardata}>
          Clear Data
        </button>
      )}
      {data.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h2> {item.email}</h2>
            <h3> {item.website}</h3>
            <h4> {item.phone}</h4>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default App;
