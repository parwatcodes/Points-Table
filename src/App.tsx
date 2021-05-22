import React from 'react';
import Points from "./pointstable";
import IResponse from "./pointstable/data.interface";

import './App.css';

const URL = "http://gsx2json.com/api?id=1WF8V-_sOXyc9nwfD74I2g3CwTnVWTghnnOmSc7QdeEU";

function App() {

  const [data1, setData] = React.useState<IResponse[]>([]);
  React.useEffect(() => {

    fetch(URL).then(response => response.json()).then(data => {
      setData(data.rows);
    }).catch(err => {
      console.log(err);
    });

  }, []);

  return (
    <>
      <Points data={data1} />

      <div style={{
        display: "flex",
        justifyContent: "center",
        textTransform: "none"
      }}>
        <p>Made with <span style={{
          color: "red"
        }}>❤</span> by ZWDxBejaan</p>
      </div>
    </>
  );
}

export default App;
