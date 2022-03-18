import './App.css';
import React, { useState } from 'react';

function App() {

  // state vars
  const [heroes, setHeroes] = useState([])

  const fetchHeroes = () => {
    // console.log("click")
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        return res.json()
      }).then(jsonRes => {
        console.log(jsonRes);
        setHeroes(jsonRes);
      }).catch(someErr => console.log(someErr))
  }

  return (
    <div className="App">
      <h1> 🦸🦹Supper Heroes🦹🦸 </h1>
      <h3>fetch / Axios / useEffect</h3>
      <hr />
      <button onClick={fetchHeroes}>fetch SuperHeroes</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Full Name</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero, i) => {
              return (
                <tr key={hero.id}>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName}</td>
                  <td><img src={hero.images.xs} alt={`${hero.name}`}></img></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
