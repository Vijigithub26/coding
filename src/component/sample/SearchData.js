import React, { useEffect, useState } from 'react'

function SearchData() {
  const [users, fetchUsers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchUsers(res)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])
    const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = users.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(users)
      }
  }
  return (
    <>
            <h1>How to display JSON data to table in React JS</h1>
            <input type='text'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}/>
               
            <tbody>
                <tr>
                    
                    <th>Id</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                </tr>
                  
                    {filteredResults.map((item,i) => (
                      <tr key={i}>
                        <td>{item.ID}</td>
                        <td>{item.NAME}</td>
                        <td>{item.USERNAME}</td>
                        <td>{item.EMAIL}</td>
                    </tr>
                   ))} 
                {users.map((item, i) => (
                    <tr key={i}>
                        <td>{item.ID}</td>
                        <td>{item.NAME}</td>
                        <td>{item.USERNAME}</td>
                        <td>{item.EMAIL}</td>
                    </tr>
                ))}
                
            </tbody>
            </>
    
  );
}

export default SearchData;