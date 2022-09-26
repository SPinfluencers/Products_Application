import React from "react";
import Sidebar from "../Components/Sidebar";
import Productpage from "./Productpage";
import { useSelector } from "react-redux";

const Homepage = () => {
  //Do not modify anything in this file
  const data = useSelector(store => store)
  console.log(data,'data')
  return (
    <div style={{ display: "flex" }}>
      {/* <Sidebar /> */}
      <Productpage />
    </div>
  );
};

export default Homepage;
