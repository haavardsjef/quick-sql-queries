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

  function generateDummyQuery() {
    const names = [
      '"John"',
      '"William"',
      '"James"',
      '"Charles"',
      '"George"',
      '"Frank"',
      '"Joseph"',
      '"Thomas"',
      '"Henry"',
      '"Robert"',
      '"Edward"',
      '"Harry"',
      '"Walter"',
      '"Arthur"',
      '"Fred"',
      '"Albert"',
      '"Samuel"',
      '"David"',
      '"Louis"',
      '"Joe"',
      '"Charlie"',
      '"Clarence"',
      '"Richard"',
      '"Andrew"',
      '"Daniel"',
      '"Ernest"',
      '"Will"',
      '"Jesse"',
      '"Oscar"',
      '"Lewis"',
      '"Peter"',
      '"Benjamin"',
      '"Frederick"',
      '"Willie"',
      '"Alfred"',
      '"Sam"',
      '"Roy"',
      '"Herbert"',
      '"Jacob"',
      '"Tom"',
      '"Elmer"',
      '"Carl"',
      '"Lee"',
      '"Howard"',
      '"Martin"',
      '"Michael"',
      '"Bert"',
      '"Herman"',
      '"Jim"',
      '"Francis"',
      '"Harvey"',
      '"Earl"',
      '"Eugene"',
      '"Ralph"',
      '"Ed"',
      '"Claude"',
      '"Edwin"',
      '"Ben"',
      '"Charley"',
      '"Paul"',
      '"Edgar"',
      '"Isaac"',
      '"Otto"',
      '"Luther"',
      '"Lawrence"',
      '"Ira"',
      '"Patrick"',
      '"Guy"',
      '"Oliver"',
      '"Theodore"',
      '"Hugh"',
      '"Clyde"',
      '"Alexander"',
      '"August"',
      '"Floyd"',
      '"Homer"',
      '"Jack"',
      '"Leonard"',
      '"Horace"',
      '"Marion"',
      '"Philip"',
      '"Allen"',
      '"Archie"',
      '"Stephen"',
      '"Chester"',
      '"Willis"',
      '"Raymond"',
      '"Rufus"',
      '"Warren"',
      '"Jessie"',
      '"Milton"',
      '"Alex"',
      '"Leo"',
      '"Julius"',
      '"Ray"',
      '"Sidney"',
      '"Bernard"',
      '"Dan"',
      '"Jerry"',
      '"Calvin"',
      '"Perry"',
      '"Dave"',
      '"Anthony"',
      '"Eddie"',
      '"Amos"',
      '"Dennis"',
      '"Clifford"',
      '"Leroy"',
      '"Wesley"',
      '"Alonzo"',
      '"Garfield"',
      '"Franklin"',
      '"Emil"',
      '"Leon"',
      '"Nathan"',
      '"Harold"',
      '"Matthew"',
      '"Levi"',
      '"Moses"',
      '"Everett"',
      '"Lester"',
      '"Winfield"',
      '"Adam"',
      '"Lloyd"',
      '"Mack"',
      '"Fredrick"',
      '"Jay"',
      '"Jess"',
      '"Melvin"',
      '"Noah"',
      '"Aaron"',
      '"Alvin"',
      '"Norman"',
      '"Gilbert"',
      '"Elijah"',
      '"Victor"',
      '"Gus"',
      '"Nelson"',
      '"Jasper"',
      '"Silas"',
      '"Christopher"',
      '"Jake"',
      '"Mike"',
      '"Percy"',
      '"Adolph"',
      '"Maurice"',
      '"Cornelius"',
      '"Felix"',
      '"Reuben"',
      '"Wallace"',
      '"Claud"',
      '"Roscoe"',
      '"Sylvester"',
      '"Earnest"',
      '"Hiram"',
      '"Otis"',
      '"Simon"',
      '"Willard"',
      '"Irvin"',
      '"Mark"',
      '"Jose"',
      '"Wilbur"',
      '"Abraham"',
      '"Virgil"',
      '"Clinton"',
      '"Elbert"',
      '"Leslie"',
      '"Marshall"',
      '"Owen"',
      '"Wiley"',
      '"Anton"',
      '"Morris"',
      '"Manuel"',
      '"Phillip"',
      '"Augustus"',
      '"Emmett"',
      '"Eli"',
      '"Nicholas"',
      '"Wilson"',
      '"Alva"',
      '"Harley"',
      '"Newton"',
    ];
    const tableName = document.getElementById("table-name").value;
    var textanswer = "INSERT INTO " + tableName + " VALUES\n";

    for (let i = 0; i < 10; i++) {
      textanswer += "\t(";
      for (let j = 0; j < numCols; j++) {
        const type = document.getElementById(j + "type").value;

        if (type === "int") {
          textanswer += i;
        }
        if (type === "varchar(255)") {
          textanswer += names[Math.floor(Math.random() * names.length)];
        }
        if (j !== numCols - 1) {
          textanswer += ",";
        }
      }
      textanswer += ")";
      if (i !== 10 - 1) {
        textanswer += ",\n";
      } else {
        textanswer += ";";
      }
    }

    const textField = document.getElementById("generate-table-sql");
    textField.value = textanswer;
  }

  return (
    <div>
      <div className="container mt-5">
        <h1 className="display-4">Generate SQL "CREATE TABLE" query</h1>
        <button
          type="button"
          className="btn btn-primary mt-1"
          onClick={() => generateTableQuery()}
        >
          Generate SQL query
        </button>
        <button
          type="button"
          className="btn btn-primary mt-1 ml-1"
          onClick={() => generateDummyQuery()}
        >
          Generate dummy data
        </button>
        <button
          type="button"
          className="btn btn-secondary mt-1 ml-1"
          onClick={() => setNumCols(numCols + 1)}
        >
          Add column
        </button>
        <form id="gen-table" class="mt-3">
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
