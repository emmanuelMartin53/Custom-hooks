import Search from "./Search";
import { useState, useEffect, lazy, Suspense} from "react";
import { ErrorBoundary } from "react-error-boundary";
import Errorfallback from "./ErrorFallback";
// import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import useFetch from "../hooks/useFetch";
// mport TableUsers from "./TableUsers";

const TableUsers = lazy(() => import("./TableUsers")) // c'est un import dynamique



const Contacts = () => {


  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([])

  // console.log(users)

  const {data, isLoading} = useFetch(`https://jsonplaceholder.typicode.com/users`)



  // useUpdateDocTitle(search)


  const filterUsers = () => {
      const foundUsers =  data.filter((user) => {
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
        <ErrorBoundary FallbackComponent={Errorfallback}>
          <Suspense
            fallback={<div>Chargement du tableau en cour... </div>}
          >
            <TableUsers dataUsers={resultSearch}/>
          </Suspense>
        </ErrorBoundary>
      }
    </div>
  )
}

export default Contacts
