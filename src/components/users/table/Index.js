import React from "react";
import Data from "./Data";

const Table = ({ isLoading, users }) => {
  return isLoading ? <p>Loading...</p> : <Data users={users} />;
};

export default Table;
