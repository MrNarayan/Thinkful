import React, {useEffect, useState} from 'react';
import './App.css';
import University from "./university"

function App(){
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState("United States");
    const [currentUniversity, setCurrentUniversity] = useState({});

  useEffect(() => {
      async function loadUniversities(country) {
          fetch(`http://universities.hipolabs.com/search?country=${country}`)
              .then(res => res.json())
              .then(setUniversities)
              .catch((error) => {
                  console.log(error);
              });
      }
      if(country)
      {
          loadUniversities(country);
      }
  }, [country]);

    const renderRows = ((universityList) => {
        const rows = [];
            const row = universityList.map(university => {
                    return (
                            <button type="button" key={university.name} onClick={()=> setCurrentUniversity(university)}>{university.name}</button>
                    )})
            rows.push(row);
        return <td>{rows}</td>;
    });

    const renderUniversities = ((list) => {
        const rows = [];
        const row = list.map(index => {
            return (
                <tr key={index}>
                    {renderRows(universities.slice(index,index+50))}
                </tr>
            )})
        rows.push(row);
        return <tbody>{rows}</tbody>;
    });
  return (
    <div className="App">
        <h1>Select your Country!</h1>
        <select onClick={(event)=> setCountry(event.target.value)}>
            <option value="">All</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Chile">Chile</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
        </select>
      <table>
          <thead>
          <tr>
              <td>
                  <b>Universities</b>
              </td>
          </tr>
          </thead>
          {renderUniversities([0, 50,100, 150,200])}
      </table>
        <University props={currentUniversity}></University>
    </div>
  );
}

export default App;
