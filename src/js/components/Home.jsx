import React, { useState } from "react";

const Home = () => {

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  return(
    <div className="container">
      <h1>todos</h1>
      <ul>
        <li>
          <input
              type="text"
              onChange={(e) => setTask(e.target.value)}
              value={task}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  setList(list.concat([task]));
                  setTask("");
                }
              }}
              placeholder="what do you need to do?"
            />
        </li>
        {list.length === 0 && <li>No hay tareas, añadir tareas</li>}
        {list.map((item, index) => (
          <li key={index}>
          {item}

          <span
            className="delete"
            onClick={() =>
              setList(
                list.filter(
                  (t, currentIndex) => index !== currentIndex
                )
              )
            }
          >
            X
          </span>
</li>
        ))}
      </ul>
      <div>{list.length} tasks</div>
    </div>
  )

      
  
};

export default Home;