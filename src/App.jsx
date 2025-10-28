import Search from "./components/Search";
import TableUsers from "./components/TableUsers";
import { fakeUsersGenerator } from "./data/users";
import {useState, useEffect, useTransition} from "react"
const users = fakeUsersGenerator();
// console.log(users)

import './App.css'

const App = () => {

  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([])
  const [isPending, startTransition] = useTransition()

  // console.log(users)

  // const {data, isLoading} = useFetch(`https://jsonplaceholder.typicode.com/users`)



  // useUpdateDocTitle(search)


  const filterUsers = () => {
      const foundUsers =  users.filter((user) => {
        console.log(Object.values(user).join(' ').toLowerCase())
        return Object.values(user)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase())
      })

      setResultSearch(foundUsers);
  }


  useEffect(() => {
    if (search !== "") {
        // Filter
        startTransition(() => {
          filterUsers()
        })

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
    <div className="App">
      <div className="text-center">
      <h1>Mes contacts</h1>
      <p style={{color: "blue"}}>Total: {users.length} membres</p>
          <Search
          searchStr={search}
          searchHandler={handleChange}
          />
      {
        search === "" ? null
        :
        <TableUsers notification={isPending} dataUsers={resultSearch}/>
      }

      </div>
    </div>
  )
}

export default App
