import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router";

const WineGuide = () => {
  const [ourRec, setOurRec] = useState([]);

  const getRecs = async (e) => {
    let response = await Axios.get(
      `https://api.spoonacular.com/food/wine/recommendation?apiKey=${process.env.REACT_APP_API_KEY}&wine=${e.target.value}&number=5`
    );
    setOurRec(response.data.recommendedWines);
  };

  return (
    <div className="App">
      <Navbar />
      <h1 className="guide-header">Wine Guide</h1>
      <span className="our-rec">Here is a list of Wine Guides top 5 wines</span>
      <select onChange={(e) => getRecs(e)}>
        <option value={""}>Select A Wine</option>
        <option value={"bordeaux"}>Bordeaux</option>
        <option value={"champagne"}>Champagne</option>
        <option value={"malbec"}>Malbec</option>
        <option value={"pinot_grigio"}>Pinot Grigio</option>
        <option value={"sauvignon_blanc"}>Sauvignon Blanc</option>
      </select>
      <div>
        {
          <ul className="wine-recs">
            {ourRec.length === 0 ? (
              <h1 className="no-recs">
                Sorry No recommendations are available at this time
              </h1>
            ) : (
              ourRec.map((rec) => {
                return (
                  <li key={rec.id}>
                    <div>
                      <img src={rec.imageUrl} alt={rec.title} />
                      <Link
                        to={`${rec.link}`}
                        className="li-header"
                        target="_blank"
                      >
                        {rec.title}
                      </Link>
                      <p>Rating: {rec.ratingCount}</p>
                      <p>Price: {rec.price}</p>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        }
      </div>
    </div>
  );
};

export default WineGuide;
