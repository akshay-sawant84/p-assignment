import React, { useState } from "react";
import Form from "./components/Form";
import Fetching from "./components/Fetching";

const COMPONENT_MAPPING = {
  form: Form,
  fetching: Fetching,
};

const Home = () => {
  const [activeComponentKey, setActiveComponentKey] = useState("form");

  const Component = COMPONENT_MAPPING[activeComponentKey];

  return <Component/>;
};

export default Home;
