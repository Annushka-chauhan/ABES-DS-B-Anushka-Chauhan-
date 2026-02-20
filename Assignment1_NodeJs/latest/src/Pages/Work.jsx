import { useState } from "react";

function Work() {
  const [data, setData] = useState("");

  const fetchData = async (endpoint) => {
    const res = await fetch(`http://localhost:5000/${endpoint}`);
    const result = await res.json();
    setData(JSON.stringify(result, null, 2));
  };

  return (
    <div className="work">
      <h2>Work with Node JS</h2>

      <div className="buttons">
        <button onClick={() => fetchData("total-memory")}>
          Total Memory
        </button>

        <button onClick={() => fetchData("free-memory")}>
          Free Memory
        </button>

        <button onClick={() => fetchData("user-info")}>
          User Info
        </button>

        <button onClick={() => fetchData("cpu")}>
          CPU Architecture
        </button>
      </div>

      <pre className="result">{data}</pre>
    </div>
  );
}

export default Work;
