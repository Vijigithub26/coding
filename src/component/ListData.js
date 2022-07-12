import React from 'react'
import data from "./Data.json"



function ListData() {
  return (
    <>
    <ul>
        {data.map((item)=>{
            <li key={item.id}>{item.text}</li>
        })}
    </ul>
    </>
  );
}

export default ListData