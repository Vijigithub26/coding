
import React from 'react';
import { List } from './List';


export const Todolist = ({ data }) => {
  return (
    <div id="Todo_List">
      <List name={data} />
     
      
    </div>
  );
};