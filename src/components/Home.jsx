import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { Link } from "react-router";
import Navbar from "./Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [pairing, setPairing] = useState([]);
  const [title, setTitle] = useState([]);

  const getRecs = async () => {
    let response = await Axios.get(
      `https://api.spoonacular.com/food/wine/pairing?apiKey=${process.env.REACT_APP_API_KEY}&food=${search}`
    );
    setPairing(response.data);
    setTitle(search);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="header-section">
        <h1>Wine Pairing</h1>
        <span>Enter you dinner below to receive our wine recommendation</span>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={getRecs}>
          Search
        </button>
      </div>
      {pairing.pairedWines?.length === 0 ? (
        <div className="no-wine-container">
          <span>Sorry no recommendations! :(</span>
        </div>
      ) : (
        <div className="wine-list">
          {pairing.pairedWines && <span>{`Wines that go with ${title}`}:</span>}
          <p>{pairing.pairingText}</p>
          <ul>
            {pairing.pairedWines?.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
            <div className="recs">
              {pairing.pairedWines && <span>Product Match:</span>}
              {pairing.productMatches?.map((el, i) => {
                return (
                  <div key={i}>
                    <img src={el.imageUrl} alt={el.title} />
                    <span>{el.title}</span>
                    <p className="description">{el.description}</p>
                    <p>Price: {el.price}</p>
                    <p>
                      <a href={el.link} rel="noreferrer" target="_blank">
                        Where to buy{" "}
                      </a>
                    </p>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
