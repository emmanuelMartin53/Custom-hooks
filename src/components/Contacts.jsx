import Search from "./Search";
import { useState, useEffect } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import TableUsers from "./TableUsers";




const Contacts = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([])

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

  // useUpdateDocTitle(search)


  const filterUsers = () => {
      const foundUsers =  users.filter((user) => {
        console.log(Object.values(user).join(' ').toLowerCase())
        return Object.values(user).join(' ').toLowerCase().includes(search.toLowerCase())
      })

      setResultSearch(foundUsers);
  }


  useEffect(() => {
    if (search !== "") {
        // Filter
        filterUsers()

      } else {
        setResultSearch([])
      }

  }, [search])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const displayMsg = (message, color) => {
    return (
      <p style={{textAlign: "center", color:color}}>
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
        resultSearch.length === 0 && search !== "" ? displayMsg("Pas de résultat", "red")
        :
        // search === "" ? displayMsg("Veuillez effectuer une recherche", "green")
        search === "" ? null
        :
        <TableUsers dataUsers={resultSearch}/>
      }
    </div>
  )
}

export default Contacts
