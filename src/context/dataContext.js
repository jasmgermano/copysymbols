import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
