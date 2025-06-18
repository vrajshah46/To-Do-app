import React, { useState } from "react";
import "./App.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTask = () => {
    setList([...list, input]);
    setInput("");
  };

  const handleUpdate = () => {
    const updatedList = [...list];
    updatedList.splice(editIndex, 1, input); // Using splice for update
    setList(updatedList);
    setInput("");
    setEditIndex(null);
  };

  const handleDelete = (i) => {
    const filteredList = list.filter((_, index) => index !== i);
    setList(filteredList);
  };

  const handleEdit = (i) => {
    setInput(list[i]);
    setEditIndex(i);
  };

  return (
    <div className="App">
      <h2 className="heading">
        <span className="highlight">To-do App</span>
      </h2>
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={handleInput} />
          {editIndex !== null ? (
            <button onClick={handleUpdate}>Update</button>
          ) : (
            <button onClick={handleTask}>Add task</button>
          )}
        </div>
        <div className="list">
          <ul>
            {list.map((data, i) => (
              <li key={i}>
                {data}
                <div>
                  <FaEdit
                    onClick={() => handleEdit(i)}
                    style={{
                      color: "blue",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                  <FaTrash
                    onClick={() => handleDelete(i)}
                    style={{
                      color: "red",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
