import React from "react";

function App() {
  return (
    <div>
      <div class="container mt-5">
        <h1 class="display-3">Generate SQL table</h1>
        <form id="gen-table">
          <div class="form-row">
            <div class="col-12 col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Table Name"
              />
            </div>
          </div>
          <div class="form-row mt-1">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Column name"
              />
            </div>
            <div class="col">
              <select id="inputState" class="form-control">
                <option selected>int</option>
                <option>varchar(255)</option>
              </select>
            </div>
          </div>
        </form>
        <button type="button" class="btn btn-primary mt-1">
          Generate SQL query
        </button>
        <button type="button" class="btn btn-secondary mt-1 ml-1" onclick="">
          Add column
        </button>
        <textarea class="form-control mt-5" name="" id="" cols="30" rows="10">
          CREATE TABLE Persons ( PersonID int, LastName varchar(255), FirstName
          varchar(255), Address varchar(255), City varchar(255) );
        </textarea>
      </div>
    </div>
  );
}

export default App;
