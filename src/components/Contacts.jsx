import Search from "./Search";
import { useState, useEffect } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import TableUsers from "./TableUsers";




const Contacts = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("");

  console.log(users)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json => {
      setUsers(json);
      setIsLoading(false);
    })
    .catch(error => console.log(error.message))
  }, [])

  useUpdateDocTitle(search)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const displayMsg = (message, color) => {
    return (
      <p style={{textAlign: "center", color:{color}}}>
        {message}
      </p>
    )
  }

  return (
    <div>
      {
        isLoading ? displayMsg("Veuillez patienter", "blue") : (
          <Search
          searchStr={search}
          searchHandler={handleChange}
          />
        )
      }

      {
        <TableUsers dataUsers={users}/>
      }
    </div>
  )
}

export default Contacts
