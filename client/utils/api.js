"use client"
import React, { useState } from "react";
import axios from "axios";

export default function DataPage() {
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/admins");
      console.log("Data received:", response.data);
      setFetchedData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <div id="data">
        {fetchedData ? (
          <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
