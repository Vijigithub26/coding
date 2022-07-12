import React from 'react'
import data from "./ListData.json"

function Search() {
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

export default Search;