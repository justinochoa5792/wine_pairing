import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [pairing, setPairing] = useState([]);

  const getRecs = async () => {
    let response = await Axios.get(
      `https://api.spoonacular.com/food/wine/pairing?apiKey=${process.env.REACT_APP_API_KEY}&food=${search}`
    );
    console.log(response);
  };
  return (
    <div className="App">
      <div className="header-section">
        <h1>Wine Pairing</h1>
        <span>Enter you dinner below to receive our wine recommendation</span>
      </div>
      <div className="input-container">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button type="button" onClick={getRecs}>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
