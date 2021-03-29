import React, { useState, useEffect } from "react";
import Table from "./components/users/table/Index";

import Lay from "./container/Layout/Lay";
import Home from "./components/home/Home";
import About from "./components/about/About";

import { UIRouter, pushStateLocationPlugin } from "@uirouter/react";

function App() {
  //users
  const [users, setUsers] = useState([]);
  //loading
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    if (response.status >= 404) {
      setIsLoading(false);
    } else {
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    }
  };

  //states
  const states = [
    {
      name: "home",
      url: "/",
      component: Home,
    },
    {
      name: "about",
      url: "/about",
      component: About,
    },
  ];

  return (
    //<Table isLoading={isLoading} users={users} />
    <UIRouter plugins={[pushStateLocationPlugin]} states={states}>
      <Lay />
    </UIRouter>
  );
}

export default App;
