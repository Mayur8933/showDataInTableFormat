import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/cartoons/cartoons2D")
      .then((res) => res.json())
      .then((data) => {
        setStoreData(data);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="App">
      <table className="table">
        <tr className="title">
          <th>Title</th>
          <th>Episodes</th>
          <th>Year</th>
          <th>Rating</th>
          <th>Runtime</th>
        </tr>
        {storeData &&
          storeData.map((item) => {
            return (
              <>
                <tr className="data">
                  <td>{item.title}</td>
                  <td>{item.episodes}</td>
                  <td>{item.year}</td>
                  <td>{item.rating}</td>
                  <td>{item.runtime_in_minutes}</td>
                </tr>
              </>
            );
          })}
      </table>
    </div>
  );
}
