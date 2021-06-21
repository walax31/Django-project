import "./App.css";
import React, { useState, useEffect } from "react";

async function fetchData(repositoly) {
  const response = await fetch(`http://localhost:8000/api/`);

  return response.json();
}

function App() {
  const [heros, setHeros] = useState([]);
  const [error, setError] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
      .then((pokeResponse) => {
        setHeros(Object.values(pokeResponse.results));
      })
      .catch(() => setError("There are somethings wrong,pleas try again later"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="App">
      {!isLoading && heros.length && (
        <div>
          {heros.map((repo) => (
            <>
              <ul>
                <h1>{repo.name}</h1>
                <span>{repo.description}</span>
              </ul>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
