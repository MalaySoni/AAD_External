import React from 'react';

function Form () {
  return (
    <div className="container">
      <form action="/action_page.php">
      <br></br>
        <div className="form-group">
          <label htmlFor="Title">Title:</label>
          <input
            type="Title"
            className="form-control"
            id="Title"
            placeholder="Enter Title"
            name="Title"
          />
          <br></br>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Description:</label>
          <input
            type="Description"
            className="form-control"
            id="pwd"
            placeholder="Enter Description"
            name="pwd"
          />
          <br></br>
        </div>
        <button type="Submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
}
export default Form;
