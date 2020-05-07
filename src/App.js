import React, { useState } from "react";

function App() {
  const [numCols, setNumCols] = useState(1);

  function generateTableQuery() {
    const tableName = document.getElementById("table-name").value;
    var textanswer = "CREATE TABLE " + tableName + " (\n";

    for (let j = 0; j < numCols; j++) {
      const name = document.getElementById(j + "name").value;
      const type = document.getElementById(j + "type").value;
      textanswer += "\t" + name + " " + type;
      if (j !== numCols - 1) {
        textanswer += ",";
      }
      textanswer += "\n";
    }
    textanswer += ");";

    const textField = document.getElementById("generate-table-sql");
    textField.value = textanswer;
  }

  return (
    <div>
      <div className="container mt-5">
        <h1 className="display-4">Generate SQL "CREATE TABLE" query</h1>
        <form id="gen-table">
          <div className="form-row">
            <div className="col-12 col-md-6">
              <input
                id="table-name"
                type="text"
                className="form-control"
                placeholder="Table Name"
                autoComplete="off"
              />
            </div>
          </div>
          <Columns numCols={numCols} />
        </form>
        <button
          type="button"
          className="btn btn-primary mt-1"
          onClick={() => generateTableQuery()}
        >
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
          id="generate-table-sql"
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
            id={i + "name"}
            type="text"
            className="form-control"
            placeholder="Column name"
            autoComplete="off"
          />
        </div>
        <div className="col">
          <select id={i + "type"} className="form-control">
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
