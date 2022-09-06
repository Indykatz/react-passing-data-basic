import { useState } from "react";
import Input from "../components/input";

// ({item, setItem}) is passed to app.js
const Home = ({item, setItem}) => {
  // const [item, setItem] = useState([]); // now in app.js

  // Sets current form values
  const [itemInput, setItemInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setItem in app.js
    setItem([...item, { item: itemInput }]);
    setItemInput("");
    console.log(item);
  };
  return (
    <div>
      <h1>Home</h1>
      <h2>Input a value here...</h2>
      <Input
        handleSubmit={handleSubmit}
        itemInput={itemInput}
        setItemInput={setItemInput}
      />
    </div>
  );
};

export default Home;
