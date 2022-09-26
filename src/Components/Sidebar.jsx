import React from "react";

const Sidebar = () => {

  const handleRadio = (e) => {
    if (e.target.value == "asc") {
    
  }
}

  return (
    <div style={{ minWidth: "250px" }}>
      <h3>Sort By</h3>
      <div>
        <div>
          <input name="sorting" type="radio" onChange={handleRadio} data-cy="asc" value="asc" />
          <label>Ascending</label>
        </div>
        <div>
          <input name="sorting" type="radio"  onChange={handleRadio} data-cy="desc" value="desc" />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
