import { useState } from "react";
import Input from "../components/input";

const Home = ({item, setItem}) => {
  // const [item, setItem] = useState([]); // now in app.js
  const [itemInput, setItemInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
