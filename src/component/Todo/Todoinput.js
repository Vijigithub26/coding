import React from "react";
import { useState, useEffect } from "react";


export const Todoinput = ({ TodoItems, updateTodo, updateTodoList }) => {
  const [input, setInput] = useState("");


  useEffect(() => {
    if (updateTodo.name) {
      setInput(updateTodo.name);
    }
  }, [updateTodo]);


  const saveTodo = (e) => {
    e.preventDefault();
    if (e.target.value === "AddTodo") {
      setInput("");
      if (input) {
        TodoItems(input);
      } else {
        alert("Enter Your Task ");  
        return;
      }
    } else {
      let updatedTodo = {
        name: input,
        id: updateTodo.id,
      };
      updateTodoList(updatedTodo);
      setInput("");
    }
  };

  return (
    <div id="Todo_Input">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input 
          type="button"
          onClick={(e) => saveTodo(e)}
          value={updateTodo.name ? "updateTodo" : "AddTodo"}
        />
      </form>
    </div>
  );
};
