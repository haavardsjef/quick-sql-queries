import React, { useState } from "react";

function App() {
  const [numCols, setNumCols] = useState(1);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="display-3">Generate SQL table</h1>
        <form id="gen-table">
          <div className="form-row">
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Table Name"
              />
            </div>
          </div>
          <Columns numCols={numCols} />
        </form>
        <button type="button" className="btn btn-primary mt-1">
          Generate SQL query
        </button>
        <button
          type="button"
          className="btn btn-secondary mt-1 ml-1"
          onClick={() => setNumCols(numCols + 1)}
        >
          Add column
        </button>
        <textarea
          className="form-control mt-5"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}

function Columns({ numCols }) {
  var columns = [];
  for (let i = 0; i < numCols; i++) {
    columns.push(
      <div className="form-row mt-1">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Column name"
          />
        </div>
        <div className="col">
          <select id="inputState" className="form-control">
            <option>int</option>
            <option>varchar(255)</option>
          </select>
        </div>
      </div>
    );
  }

  return columns;
}

export default App;
